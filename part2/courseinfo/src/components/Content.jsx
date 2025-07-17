import React from 'react'
import Part from './Part';

const Content = ({content}) => {
  return (
    <div>
      {content.map(content => 
        <Part key={content.id} part={content} />
      )}
    </div>
  )
}

export default Content