'use client'
import React from 'react'
import { handleLogin } from './handleLogin'

function page() {
  return (
    <div>
            <a onClick={handleLogin}>Home</a>
    </div>
  )
}

export default page