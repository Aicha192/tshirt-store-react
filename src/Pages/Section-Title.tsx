import React from 'react'

type Props = {
    title: string;
    subtitle: string;
}

export default function SectionTitle({ subtitle, title }: Props) {
  return (
    <div className='space-y-8 mt-20 text-center'>
       <h1 className='text-5xl font-bold tracking-[2px]'>{title}</h1>
        <div className='w-16 h-[2px] bg-black mx-auto'></div>
       <p className='text-md tracking-wide font-bold max-w-xl mx-auto'>{subtitle}</p>
    </div>
  )
}
