import React from 'react'

export const LargeEmployeeListItem = ({employee}) => {
    const {name, age, designation, hobbies} = employee;
  return (
    <>
        <div>
            Name: {name},
            Age: {age},
            Designation: {designation}
        </div>
        <ul>
            {hobbies.map(hobby=> <li key={hobby}>{hobby}</li>)}
        </ul>
    </>
  )
}

