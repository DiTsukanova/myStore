import React from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const params = useParams();
  console.log(params)
  return (
    <div className='container'>
      <img src="" alt="" />
      <h2>Пицца</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sed iste neque deleniti est at quaerat vel sunt repellat similique odit eaque culpa inventore totam fugiat praesentium odio. Quos, molestias!</p>
      <h4>245р</h4>
    </div>
  );
};

export default FullPizza;