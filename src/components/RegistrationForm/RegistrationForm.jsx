import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import css from './RegistrationForm.module.css';
import Joi from 'joi';

// import { authSelectors } from '../../redux/auth/auth-selectors';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Joi.object({
  name: Joi.string().min(3).max(254).regex(/[A-z]/).required('Required'),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .max(254)
    .regex(/([a-z0-9_.-]{3,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/)
    .required('Required'),
  password: Joi.string()
    .min(6)
    .max(100)
    .pattern(/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/)
    .required('Required'),
});

const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isAuth = useSelector(authSelectors.getIsLoggenIn);
  const handleClick = () => setShow(!show);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
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
      dispatch(authOperations.actionRegister(formData)).then(({ payload }) => {
        if (payload?.code === 201) {
          navigate('/login');
          setFormData(initialValues);
          setErrors({});
        }
      });
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Register</h2>
      <form onSubmit={handleSubmit}>
        <ul className={css.list}>
          <li className={css.item}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              className={css.input}
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
            />
            {errors.name ? (
              <div className={css.textInput}>{errors.name}</div>
            ) : null}
          </li>
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
              autoComplete="username"
              value={formData.email}
            />
            {errors.email ? (
              <div className={css.textInput}>{errors.email}</div>
            ) : null}
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
              className={css.passwordButton}
              type="submit"
              onClick={handleClick}
            >
              {show ? (
                <FiEye className={css.fiEye} />
              ) : (
                <FiEyeOff className={css.fiEyeOff} />
              )}
            </button>
            {errors.password ? (
              <div className={css.textInput}>{errors.password}</div>
            ) : null}
          </li>
        </ul>
        <div className={css.buttonContainer}>
          <button className={css.buttonRegister} type="submit">
            Register
          </button>

          <NavLink className={css.buttonRegister} to="/login">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
