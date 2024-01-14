import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diaryPerDayOperation } from '../../redux/diaryPerDay';
import { diarySelectors } from '../../redux/diaryPerDay';
import ChoiceModal from '../../components/ChoiceModal/ChoiceModal';
import css from './DiaryProductListItem.module.css';

export const DiaryProductListItem = ({ product }) => {
  const dispatch = useDispatch();

  const { weightGrm, _id } = product;
  const [showModal, setShowModal] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const currentDate = new Date().toLocaleDateString();
  const isCurrentDay = date === currentDate;
  const isLoadingDeletedProd = useSelector(
    diarySelectors.getIsDeleteProductLoading
  );

  const payload = {
    productId: _id,
    date: date,
  };

  const handleDelete = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const choiceHandler = answer => {
    if (answer) {
      dispatch(diaryPerDayOperation.actionDeleteProduct(payload));
    }
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  return (
    <li className={css.listItem}>
      {showModal && (
        <ChoiceModal
          text={'Do you want to remove this product?'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
          subText={product.product.title}
        />
      )}

      <div className={css.info}>
        <div>{product.product.title}</div>
        <div>{weightGrm} Grams</div>
        <div>{product.product.calories}Kcal</div>
      </div>

      {isCurrentDay && (
        <button
          type="button"
          onClick={handleDelete}
          disabled={isLoadingDeletedProd}
        >
          <GrClose />
        </button>
      )}
    </li>
  );
};
