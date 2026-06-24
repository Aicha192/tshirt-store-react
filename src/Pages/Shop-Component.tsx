import React from 'react'

type Props = {
    title: string;
    total: number;
}

export default function ShopComponent({ title, total }: Props) {
  return (
    <div className='mb-10'>
     <p className='text-gray-400 text-sm'>Home / {title}</p>
     <h1 className='text-4xl font-semibold mt-2'>{title}</h1>
     <div className='flex justify-between mt-20'>
        <p className='text-gray-500 text-sm'>Showing 1-{total} of {total} results</p>
     </div>
    </div>
  )
}
