import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import css from './SideBar.module.css';

export default function SideBar({ date, kcalConsumed, calorie }) {
  const notRecomendedProd = useSelector(authSelectors.getUserNotRecommendProd);
  console.log('notRecomendedProd:', notRecomendedProd);

  return (
    <div className={css.container}>
      <div className={css.productsListBox}>
        <DailyCalorieIntake
          date={date.replace(/\./g, '/')}
          daylykCalCount={calorie}
          kcalConsumed={kcalConsumed}
        />
        <div className={css.boxProducts}>
          <h3 className={css.title}>Not recommended food</h3>

          {notRecomendedProd.length > 0 ? (
            <ul className={css.list}>
              {notRecomendedProd?.map(product => (
                <li key={product}></li>
              ))}
            </ul>
          ) : (
            <p className={css.notRecomended}>
              Your diet will be displayed here
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
