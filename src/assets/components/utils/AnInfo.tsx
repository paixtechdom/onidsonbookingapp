import React, { FC } from 'react'
import { fadedBold } from '../../StyleClasses'

interface anInfoInterface {
    title: string,
    info: string | number
}

const AnInfo:FC<anInfoInterface> = ({title, info}) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
        <div className="flex items-center gap-2">
            <p className="size-3 bg-primary rounded-full"></p>
            <h3 className={`font-bold text-lg`}>{title}</h3>
        </div>
            <p className='ml-5'>{info}</p>
    </div>
  )
}

export default AnInfo