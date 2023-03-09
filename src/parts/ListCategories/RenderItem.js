import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function RenderItem({ item }) {
  return (
    <div className="w-3/6 md:w-1/6 px-4 h-100 mb-8">
      <Link href="#">
        <div className="border-gray-200 h-full p-6 border relative hover:bg-indigo-700 hover:border-indigo-700  hover:text-white">
          <Image src={item.imageName} alt={item.name} className="text-blue-300" />
          <div className="mt-10">
            <h4 className="text-lg w-1/2">
              {item.name}
            </h4>
            <h5 className="text-sm mt-2">
              {item.total} Courses
            </h5>
          </div> 
        </div>
      </Link>
    </div>
  );
}
