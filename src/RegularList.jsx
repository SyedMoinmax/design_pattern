import React from 'react'

export const RegularList = ({items, resourceName, itemComponent: ItemComponent}) => {
  return (
    <>
    {items && items.map((item, i)=>(
        <ItemComponent key={i} {...{[resourceName]: item}}/>
    ))}
    </>
  )
}

