import Image from "next/image";
import React from "react";
import { Item } from "@ash/shared";
async function getData() {
  const res = await fetch("http://127.0.0.1:4000/api/v1/items", {
    cache: "force-cache",
  });
  return res.json();
}
export default async function index() {
  const { items }: { items: Item[] } = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Items
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.ItemId} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                  src={item.itemIcon_URL}
                  alt={item.itemIcon_URL}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.DeviceName}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
