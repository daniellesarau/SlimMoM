import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ro';
import Datetime from 'react-datetime';
import CalendarBtn from '../CalendarBtn/CalendarBtn';
import { diarySelectors, updateDate } from '../../redux/diaryPerDay';
import { diaryPerDayOperation } from '../../redux/diaryPerDay';
import css from './DiaryDateCalendar.module.css';

function dateToString(date) {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  return day + '.' + month + '.' + year;
}

export default function DiaryDateCalendar() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const currentDate = useSelector(diarySelectors.getCurrentDate);
  const [date, setDate] = useState(currentDate);

  let inputProps = {
    value: date,
    disabled: true,
  };

  function valid(current) {
    let today = new Date();
    return current.isBefore(today);
  }

  function changeDate(evt) {
    const dateString = dateToString(evt._d);
    setIsShow(false);
    dispatch(diaryPerDayOperation.actionGetProducts({ date: dateString }));
    dispatch(updateDate(dateString));
    setDate(dateString);
  }

  function openCalendar() {
    setIsShow(!isShow);
  }
  function leave() {
    setIsShow(false);
  }

  return (
    <div className={css.container} onMouseLeave={leave} onClick={openCalendar}>
      <Datetime
        className={css.time}
        inputProps={inputProps}
        timeFormat={false}
        dateFormat="DD.MM.YYYY"
        isValidDate={valid}
        onChange={changeDate}
        open={isShow}
        locale="en"
        closeOnSelect={true}
        closeOnClickOutside={true}
      />

      <CalendarBtn onHandleClick={openCalendar} isShown={isShow} />
    </div>
  );
}
