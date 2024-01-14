import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import { diarySelectors } from '../../redux/diaryPerDay';

import css from './DailyCalorieIntake.module.css';

export default function DailyCalorieIntake({ date }) {
  const daylykCalCount = useSelector(authSelectors.getUserAdviceCalorie);
  const products = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = products !== null && products.length > 0;
  let kcalConsumed = 0;

  if (isAnyProducts) {
    kcalConsumed = products
      .map(({ product, weightGrm }) => (weightGrm / 100) * product.calories)
      .reduce((p, c) => p + c, 0);
  }

  let kcalLeft = daylykCalCount - kcalConsumed;
  let percOfNorm = ~~((kcalConsumed / daylykCalCount) * 100);

  if (kcalLeft < 0) {
    kcalLeft = '000';
  }

  return (
    <div className={css.container}>
      <h3 className={css.listTitle}>Summary for {date}</h3>
      <ul className={css.listInfo}>
        <li className={css.itemInfo}>
          <span>Left</span>
          <span>{Math.round(kcalLeft) || '000'} Kcal</span>
        </li>
        <li className={css.itemInfo}>
          <span>Consumed</span>
          <span>{Math.round(kcalConsumed) || '000'} Kcal</span>
        </li>
        <li className={css.itemInfo}>
          <span>Daily rate</span>
          <span>{daylykCalCount || '000'} Kcal</span>
        </li>
        <li className={css.itemInfo}>
          <span>n% of normal</span>
          <span className={css.normSpan}>{percOfNorm || '000'} Kcal</span>
        </li>
      </ul>
    </div>
  );
}
