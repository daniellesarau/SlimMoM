import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import SideBar from '../../components/SideBar/SideBar';
import { getUsersAdvice } from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth';
import Header from '../../components/Header/Header';
import { diaryPerDayOperation, updateDate } from '../../redux/diaryPerDay';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';
import css from './CalculatorPage.module.css';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();
  const userInfo = useSelector(authSelectors.getUserInfo);

  useEffect(() => {
    dispatch(updateDate(currentDate));
    dispatch(diaryPerDayOperation.actionGetProducts({ date: currentDate }));
  }, [currentDate, dispatch]);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Header localPage="CalculatorPage" />
      <div className={css.section}>
        <MobileSidebar />
        <div className={css.containerForm}>
          <DailyCaloriesForm
            onFormSubmit={submitForm}
            userInfo={userInfo}
            isCleanUserInfo={false}
          />
        </div>
        <div className={css.sidebarBox}>
          <SideBar date={currentDate} />
        </div>
      </div>
    </>
  );
};
export default CalculatorPage;
