import { useState, Fragment } from 'react';
import Select from 'react-select';
import { BsPlusLg } from 'react-icons/bs';
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/diaryPerDay';
import { getProductsByQuery } from '../../service/apiAxios';
import css from './DiaryAddProductForm.module.css';

const loadOptions = async (inputValue, callback) => {
  if (inputValue.length < 2) {
    return;
  }
  const { data } = await getProductsByQuery(inputValue);
  console.log('Product List:', data.result);
  callback(
    data.result.map(product => {
      const title = product.title;
      return { label: title, value: title };
    })
  );
};

export default function DiaryAddProductForm({ onSubmit }) {
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');

  const isLoadingAddedProduct = useSelector(
    diarySelectors.getIsAddProductLoading
  );

  const handleSubmit = async event => {
    event.preventDefault();
    const weightNumber = parseInt(weight);
    if (!selectedProduct || isNaN(weightNumber)) return;

    const { data: products } = await getProductsByQuery(selectedProduct.value);
    const productId = products.result[0]._id;

    onSubmit({
      product: productId,
      weight: weightNumber,
    });

    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <Select
            className={css.inputProduct}
            value={selectedProduct}
            onChange={setSelectedProduct}
            loadOptions={loadOptions}
            placeholder="Enter product name"
            noOptionsMessage={({ inputValue }) =>
              inputValue ? 'There is no such product' : 'Enter product name'
            }
          />
        </label>
        <label className={css.label}>
          <input
            className={css.inputWeight}
            type="number"
            min={1}
            name="weight"
            title="Enter the weight of the product
"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Grams"
          />
        </label>
        <button className={css.buttonMobile} type="submit">
          Add
        </button>
        <button
          className={css.buttonSubmit}
          type="submit"
          disabled={
            selectedProduct === null || weight === '' || isLoadingAddedProduct
          }
        >
          {isLoadingAddedProduct ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : (
            <BsPlusLg size={14} />
          )}
        </button>
      </form>
    </Fragment>
  );
}
