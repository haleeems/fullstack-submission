import React from 'react'

const Filter = ({filter, filterChange}) => {
  return (
    <div>
      <p>filter shown with
        <input value={filter} onChange={filterChange} />
      </p>
    </div>
  )
}

export default Filter