import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

const FullPizza = (props) => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  // const { id } = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://650abf4edfd73d1fab08cfdc.mockapi.io/items/${id}`);
        setPizza(data)
      } catch (error) {
        alert("Ошибка при получении пиццы!")
        navigate('/');
      }
    }

    fetchPizza();
  }, [id]);

  // console.log(params)

  if (!pizza) {
    return "Загрузка..."
  }

  return (
    <div className="container">
      FullPizza
      {pizza.title}
      <p>{pizza.prixe}</p>
      <img src={pizza.imageUrl} alt="" />
    </div>
  )
}

export default FullPizza;