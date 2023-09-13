import React, { useState } from "react";


function Categories() {

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

  const categories = ['Все', 'Вегетарианские', 'Мяcные', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>

        {
          categories.map((value, index) => {
            return <li onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>{value}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Categories;