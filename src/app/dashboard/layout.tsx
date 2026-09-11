import { ReactNode } from "react";
import React from 'react'

export default function layout( 
    {
        children
    }:{
        children: ReactNode
    })
    {
   
  return (
    <div>
      <h1>SideBar</h1>
      {children}
    </div>
  )
}
