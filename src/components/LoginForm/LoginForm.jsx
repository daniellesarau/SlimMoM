import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Link } from 'react-router-dom';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .min(3)
    .max(254)
    .required(),
  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(/^[A-Za-z0-9]+$/)
    .required(),
});

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const validationResult = validationSchema.validate(formData, {
      abortEarly: false,
    });

    if (validationResult.error) {
      const newErrors = validationResult.error.details.reduce((acc, error) => {
        return { ...acc, [error.path[0]]: error.message };
      }, {});
      setErrors(newErrors);
    } else {
      console.log('Before dispatching actionLogin');
      try {
        const { payload } = await dispatch(
          authOperations.actionLogin(formData)
        );

        console.log('Payload:', payload);

        if (payload && payload.status === 'success') {
          console.log('Navigating to /diary');
          navigate('/diary', { replace: true });
          setFormData(initialValues);
          setErrors({});
        } else {
          // Handle login failure
          console.log('Login failed:', payload);
          // You might want to display an error message to the user
        }
      } catch (error) {
        // Handle error if needed
        console.error('Error in login:', error);
      }
    }
  };
  // dispatch(authOperations.actionLogin(formData)).then(() => {
  //   navigate('/diary', { replace: true });
  //   setFormData(initialValues);
  //   setErrors({});
  // });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <ul className={css.listLogin}>
          <li className={css.item}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <input
              className={css.input}
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
              value={formData.email}
              autoComplete="username"
            />
            {errors.email && (
              <div className={css.boxformik}>{errors.email}</div>
            )}
          </li>
          <li className={css.item}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <input
              className={css.input}
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              onChange={handleChange}
              value={formData.password}
              autoComplete="current-password"
            />
            <button
              className={css.buttonPassword}
              type="button"
              onClick={handleClick}
            >
              {show ? (
                <FiEye className={css.fiEye} />
              ) : (
                <FiEyeOff className={css.fiEyeOff} />
              )}
            </button>
            {errors.password && (
              <div className={css.boxformik}>{errors.password}</div>
            )}
          </li>
        </ul>
        <div className={css.buttonBox}>
          <button className={css.buttonSubmit} type="submit">
            Login
          </button>
          <Link className={css.linkRegister} to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
