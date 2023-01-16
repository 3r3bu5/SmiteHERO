'use client';
import Link from "next/link";
import React from "react";
import { useUserContext } from "../context/userContext";
import "../styles/globals.css";

export default function SmiteHero() {
  const { isAuth, deleteUserData } = useUserContext();
  const logout = () => { 
    deleteUserData!();
    window.location.href = "/";
  };
  return (
    <>
      <div>SmiteHero</div>
      <Link href={"/gods"}>Gods</Link>
      <Link href={"/items"}>Items</Link>
      {isAuth && <div>
        <Link href={"/profile"}>Profile</Link>
        <button onClick={logout}>Logout</button>
      </div> }
      <Link href={"/auth"}> Login </Link>
    </>
  );
}
