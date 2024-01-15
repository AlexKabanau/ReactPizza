import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string,
    title: string,
    price: number
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://650abf4edfd73d1fab08cfdc.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>
      Загрузка...;
    </>
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est.</p>
      <h4>от {pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
