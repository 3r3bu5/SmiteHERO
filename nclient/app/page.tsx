'use client';
import Link from "next/link";
import React from "react";
import "../styles/globals.css";

export default function SmiteHero() {
  return (
    <>
      <div>SmiteHero</div>
      <Link href={"/gods"}>Gods</Link>
      <Link href={"/items"}>Items</Link>
      <Link href={"/auth"}> Login </Link>
    </>
  );
}
