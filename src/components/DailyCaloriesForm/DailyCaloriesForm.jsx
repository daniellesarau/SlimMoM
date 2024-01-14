import { Formik } from 'formik';
import { Field, Form } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import css from './DailyCaloriesForm.module.css';

export default function DailyCaloriesForm({
  onFormSubmit,
  userInfo = false,
  isCleanUserInfo = false,
  isShowNoti = true,
}) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedBldType, setSelectedBlbType] = useState(() =>
    userInfo ? userInfo.bloodType : '1'
  );

  const onBldTypeSelect = event => {
    setSelectedBlbType(event.target.value);
  };

  const inivialValues = userInfo
    ? userInfo
    : {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1',
      };

  const validate = values => {
    const { height, age, desiredWeight, currentWeight, bloodType } = values;
    if (!height || height < 100 || height > 250) return;
    if (!age || age < 18 || age > 100) return;
    if (!currentWeight || currentWeight < 45 || currentWeight > 500) return;
    if (!desiredWeight || desiredWeight < 45 || desiredWeight > 500) return;
    if (!bloodType) values.bloodType = selectedBldType;

    setIsFormValid(true);
  };

  return (
    <Formik
      initialValues={inivialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if (!isFormValid) return;

        const user = {
          userData: {
            height: String(values.height),
            age: String(values.age),
            currentWeight: String(values.currentWeight),
            desiredWeight: String(values.desiredWeight),
            bloodType: String(values.bloodType),
          },
        };

        if (onFormSubmit(user) && isShowNoti) {
          toast.success('Start losing weight!');

          window.scrollTo(0, document.body.scrollHeight);
        }

        onFormSubmit(user);

        if (isCleanUserInfo) {
          resetForm();
        }
      }}
    >
      <div className={css.containerForm}>
        <p className={css.title}>
          Calculate your daily calorie intake right now
        </p>
        <Form className={css.form}>
          <div className={css.valuesBox}>
            <label className={css.valueLabel} htmlFor="height">
              Height
              <Field
                className={css.field}
                pattern="[0-9]{3}"
                required
                id="height"
                type="number"
                name="height"
                min="100"
                max="250"
              />
            </label>
            <label className={css.valueLabel} htmlFor="age">
              Age
              <Field
                className={css.field}
                pattern="[0-9]{2}"
                id="age"
                required
                type="number"
                name="age"
                min="18"
                max="100"
              />
            </label>
            <label className={css.valueLabel} htmlFor="currentWeight">
              Current weight
              <Field
                className={css.field}
                pattern="[0-9]{2,3}"
                required
                id="currentWeight"
                type="number"
                name="currentWeight"
                min="45"
                max="500"
              />
            </label>
          </div>
          <div className={css.valuesBox}>
            <label className={css.valueLabel} htmlFor="desiredWeight">
              Desired weight
              <Field
                className={css.field}
                pattern="[0-9]{2,3}"
                id="desiredWeight"
                required
                name="desiredWeight"
                type="number"
                min="46"
                max="150"
              />
            </label>
            <label className={css.valueLabel} htmlFor="bloodType" required>
              <p style={{ marginBottom: '20px' }}>Blood Type</p>
              <ul className={css.listFields}>
                <li>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="bloodType"
                    id="blood-inp-1"
                    value={1}
                    checked={selectedBldType === '1'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-1">1</label>
                </li>
                <li>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="bloodType"
                    id="blood-inp-2"
                    value={2}
                    checked={selectedBldType === '2'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-2">2</label>
                </li>
                <li>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="bloodType"
                    id="blood-inp-3"
                    value={3}
                    checked={selectedBldType === '3'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-3">3</label>
                </li>
                <li>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="bloodType"
                    id="blood-inp-4"
                    checked={selectedBldType === '4'}
                    onClick={onBldTypeSelect}
                    value={4}
                  />
                  <label htmlFor="blood-inp-4">4</label>
                </li>
              </ul>
            </label>
          </div>

          <div className={css.buttonBox}>
            <Button type={'submit'} btnText="Start losing weight" />
          </div>
        </Form>
      </div>
    </Formik>
  );
}
