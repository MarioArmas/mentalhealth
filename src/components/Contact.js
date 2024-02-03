import React from 'react'

export default function Contact({ name, organization, direction}) {
  return (
    <div className='mb-10'>
      <h3>{name}</h3>
      <p>{organization}</p>
      <p className='text-red-600'>{direction}</p>
    </div>
  )
}
