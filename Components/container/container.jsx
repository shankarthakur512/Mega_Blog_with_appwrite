import React from 'react'

function Container({children}) {
  return (
    <div className='w-full h-auto px-4 bg-slate-800'>
      {children}
    </div>
  )
}

export default Container
