import React from 'react'

export const SmallProductListItem = ({product}) => {
    const {productname, price} = product;
  return (
    <>
        <div>
            {productname} - {price}
        </div>
    </>
  )
}
