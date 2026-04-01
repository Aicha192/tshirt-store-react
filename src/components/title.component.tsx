import React from 'react'

interface TitleComponentProps {
    Subtitle: string;
    Title: string;
    color?: string
}

export default function TitleComponent({
     Subtitle,
     Title,
     color = "text-black"
}:TitleComponentProps) {
  return (
    <div className={`text-center ${color}`}>
        <h4 className="font-light text-lg">{Subtitle}</h4>
        <h2 className="text-4xl font-bold">{Title}</h2>
    </div>
  )
}
