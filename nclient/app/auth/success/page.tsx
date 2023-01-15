'use client'
import React, { useEffect } from 'react'

function SucessLogin() {
  useEffect(() => { 
    setTimeout(() => {
      window.close()
     }, 500)
  }, [])
  return (
    <div>Thank you for signin</div>
  )
}

export default SucessLogin