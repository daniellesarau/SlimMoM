import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diaryPerDay';
import DiaryDateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';
import SideBar from '../../components/SideBar/SideBar';
import { diaryPerDayOperation } from '../../redux/diaryPerDay';
import Header from '../../components/Header/Header';
import css from './DiaryPage.module.css';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const isCurrentDay = date === currentDate;

  useEffect(() => {
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate })
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate })
        );
      }
    });
  }, [currentDate, dispatch]);

  const formSubmitHandler = data => {
    const { product, weight } = data;

    dispatch(
      diaryPerDayOperation.actionAddProduct({
        date: currentDate,
        data: { product: product, weightGrm: weight },
      })
    );

    setMobileAddSelected(false);
  };

  return (
    <>
      <Header localPage="DiaryPage" />
      <div className={css.container}>
        <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />

        <div className={css.diaryBox}>
          {!mobileAddSelected && <DiaryDateCalendar />}

          {isCurrentDay ? (
            <DiaryAddProductForm
              onSubmit={formSubmitHandler}
              className={mobileAddSelected ? '' : 'hideOnMobile'}
            />
          ) : (
            <h3 className={css.title}> Foods you ate that day:</h3>
          )}

          <div
            className={`${css.productBox} ${
              mobileAddSelected ? 'hideOnMobile' : ''
            }`}
          >
            {<DiaryProductsList />}
          </div>

          {isCurrentDay && !mobileAddSelected && (
            <button
              className={`${css.button} showOnMobile`}
              onClick={() => setMobileAddSelected(true)}
            >
              <BsPlusLg size={14} />
            </button>
          )}
        </div>
        <div
          className={`${css.containerSidebar} ${
            mobileAddSelected ? 'hideOnMobile' : ''
          }`}
        >
          <SideBar date={date} />
        </div>
      </div>
    </>
  );
}
