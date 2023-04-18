import React from 'react'

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <>
        <div className='footer'>
             <p> ⒸCopyright {year} Powered by SumitNain </p>
        </div>
    </>
  )
}

export default Footer