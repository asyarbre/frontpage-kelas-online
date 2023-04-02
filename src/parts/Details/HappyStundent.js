import React from "react";
import Image from "next/image";

export default function HappyStundent({ data }) {
  return (
    <div className="mt-4 border rounded-lg p-4">
      <p className="text-gray-600 mt-1">{data?.note ?? "Mantap"}</p>
      <div className="flex items-center mt-4">
        <div className="rounded-full overflow-hidden">
          <Image
            className="w-14 h-14 object-cover"
            src={data?.users?.avatar ?? ""}
            alt={data?.users.name ?? "Student Name"}
            width={30}
            height={30}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-gray-900">
            {data?.users?.name ?? "Student Name"}
          </h2>
          <h3 className="text-sm text-gray-600">
            {data?.users?.role ?? "Student Role"}
          </h3>
        </div>
      </div>
    </div>
  );
}
