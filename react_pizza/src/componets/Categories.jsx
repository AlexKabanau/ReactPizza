import React from "react";


function Categories({ value, onChangeCategory }) {

  // const [activeIndex, setActiveIndex] = useState(0);

  // const onClickCategory = (index) => {
  //   setActiveIndex(index)
  // }

  const categories = ['Все', 'Вегетарианские', 'Мяcные', 'Гриль', 'Острые', 'Закрытые'];

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
}

export default Categories;