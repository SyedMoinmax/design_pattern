import React from 'react'

export const LargeProductListItem = ({product}) => {
    const {productname, price} = product;
  return (
    <>
    {productname} - {price}
    </>
  )
}
