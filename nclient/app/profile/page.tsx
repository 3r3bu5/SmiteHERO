"use client"
import { useUserContext } from "../../context/userContext";
import React from 'react'

function Profile() {
  const { user, isAuth } = useUserContext();
  if (!isAuth) {
    window.location.href = "/auth";
  }
  return (
    <div>Hello { user?._id} </div>
  )
}

export default Profile