import { useState } from 'react';
import { adviceForNoAuthUser } from '../../service/apiAxios';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../components/Modal/Modal';
import Background from '../../components/Background/Background';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import css from './MainPage.module.css';

export default function MainPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setIsLoading(false);
  };

  const submitForm = async data => {
    setIsLoading(true);

    const resp = await adviceForNoAuthUser(data);

    if (resp.code === 200) {
      setUserInfo(resp.data.nutritionAdvice);
      setOpenModal(true);
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <Header localPage="MainPage" />
      <div className={css.container}>
        <DailyCaloriesForm
          onFormSubmit={submitForm}
          isCleanUserInfo={true}
          isShowNoti={false}
        />
        {isLoading && <Loader />}
        {openModal && (
          <Modal userData={userInfo} closeModalHandle={closeModal} />
        )}
      </div>
    </Background>
  );
}
