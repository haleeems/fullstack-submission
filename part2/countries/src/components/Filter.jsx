import React from 'react'

const Filter = ({filter, filterChange}) => {
  return (
    <div>
      <p>
        find countries <input value={filter} onChange={filterChange}/>
      </p>
      
    </div>
  )
}

export default Filter