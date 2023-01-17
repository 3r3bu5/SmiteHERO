import Image from "next/image";
import React, { use } from "react";
import { Item } from "@ash/shared";

 async function getData() {
   const res = await fetch("http://127.0.0.1:4000/api/v1/items", {
    cache: "force-cache",
  });
  return res.json();
}

export default  function Content() {
 
  const { items }: { items: Item[] } =  use(getData());
  return <>
          {items.map((item) => (
            <div key={item.ItemId} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-600 group-hover:opacity-75 lg:aspect-none text-zinc-600 ">
                <Image
                  src={item.itemIcon_URL}
                  alt={item.itemIcon_URL}
                  width={480}
                  height={480}
                  className="hfull- w-full object-cover lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.DeviceName} 
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </>
}
