import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
  const navigate = useNavigate();

  const showDetail=()=>{
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='item-card' onClick={showDetail}>
      <img className="item-img" src={item?.img}
      />
      <div>{item?.choice == true ? "Consious choice" : ""}</div>
      <div className='item-text-font'>{item?.title}</div>
      <div className='best-item'>\{item?.price}</div>
      <div className='best-item'>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
