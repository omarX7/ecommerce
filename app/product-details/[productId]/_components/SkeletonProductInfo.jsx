import React from 'react'

const SkeletonProductInfo = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='bg-slate-700 h-[20px] w-[400px] animate-pulse'></div>
        <div className='bg-slate-700 h-[20px] w-[70px] animate-pulse'></div>
        <div className='bg-slate-700 h-[20px] w-[400px] animate-pulse'></div>
        <div className='bg-slate-700 h-[20px] w-[400px] animate-pulse'></div>
        <div className='bg-slate-700 h-[20px] w-[400px] animate-pulse'></div>
        <div className='bg-slate-700 h-[20px] w-[100px] animate-pulse'></div>
    </div>
  )
}

export default SkeletonProductInfo