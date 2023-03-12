import React from 'react'
import errorIcon from '../icons/errorIcon.svg'

function SearchError() {
  return (
    <div className='flex flex-col items-center text-center mt-[132px]'>
      <img className='w-16 h-16' src={errorIcon} alt="" />
      <p className='font-bold mt-11 text-xl text-[#2D2D2D]'>No Definitions Found</p>
      <p className='mt-6 text-lg max-w-[736px] text-[#757575]' >
        Sorry pal, we couldn't find definitions for the word you
        were looking for. You can try the search again at later time
        or head to the web instead.
      </p>
    </div>
  )
}

export default SearchError