import React, { memo } from "react";
// import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesProps = {
  value: number,
  onChangeCategory: (i: number ) => void
};
const categories = ['Все', 'Вегетарианские', 'Мяcные', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  // useWhyDidYouUpdate('Categories', { value, onChangeCategory })
// function Categories({ value, onChangeCategory }) {

  // const [activeIndex, setActiveIndex] = useState(0);

  // const onClickCategory = (index) => {
  //   setActiveIndex(index)
  // }


  return (
    <div className="categories">
      <ul>

        {
          categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  )
})

export default Categories;