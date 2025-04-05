import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-10 h-10 rounded-full border-3 border-green-400 animate-spin border-t-transparent'></div>
    </div>
  )
}

export default Loading