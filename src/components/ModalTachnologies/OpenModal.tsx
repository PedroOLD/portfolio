import React, { useContext } from 'react'
import ContextModal from './context/ContextModal'

export const OpenModal = () => {

  const modal = useContext(ContextModal);

  if (modal) {
    return (
      <h1 className='text-white'>Teste1</h1>
    )
  } else {
    return (
      <h3 className='text-white'>Pedro lindo</h3>
    )
  }
}