import React from 'react'


function Button({
    children,
    type ="button",
    bgColor = "bg-blue-500",
    textcolor="text-white",
    className ='',
    ...props
}) {
  return (
    <div>
      <button className={`px-4 py-2  rounded-lg ${bgColor} ${className} ${textcolor}`} {...props}>{children}</button>
    </div>
  )
}

export default Button
