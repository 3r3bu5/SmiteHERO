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
     <div> Hello Mama! </div>
    </>
  );
}
