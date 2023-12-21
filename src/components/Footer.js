import React from 'react'

const Footer = () => {
    const footerstyle={
        positon:"absolute",
        top:"100vh",
        width:"100%"
    }
  return (
    <div className='bg-dark text-light py-3 mt-3' style={footerstyle}>
    <p className='text-center'>
        Copright &copy; My Todo list
    </p>
    </div>
  )
}

export default Footer
