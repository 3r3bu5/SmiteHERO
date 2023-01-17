import Image from "next/image";
import React, { useEffect } from "react";
import "../../styles/globals.css";
import { God } from "@ash/shared";
async function getData() {
  const res = await fetch("http://127.0.0.1:4000/api/v1/gods", {
    cache: "force-cache",
  });
  return res.json();
}
export default async function index() {
  const { gods }: { gods: God[] } = await getData();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Gods
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {gods.map((god) => (
            <div key={god.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                  src={god.godCard_URL}
                  alt={god.godCard_URL}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500">{god.Lore}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {god.Pantheon}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
