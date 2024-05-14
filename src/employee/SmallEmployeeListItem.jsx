import React from 'react'

export const SmallEmployeeListItem = ({employee}) => {
    const {name, age} = employee;
  return (
    <>
        <div>
            Name: {name},
            Age: {age}
        </div>
    </>
  )
}

