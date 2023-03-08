import React from "react";
import Link from "next/link";
import IconPlay from "public/images/icon_btn_play.svg";
import Image from "next/image";

export default function RenderItem({ item }) {
  console.log(item);
  return (
    <div className="w-1/4 px-4">
      <Link
        href="/courses/[id]"
        as={`/courses/${item.id}`}
      >
        <div className="item relative">
          <figure className="item-image">
            <Image
              src={item?.thumbnail ?? ""}
              alt={item?.name ?? "Some Information"}
            />
          </figure>
          <div className="item-meta mt-2">
            <h4 className="text-lg text-gray-900">
              {item?.name ?? "Course name"}
            </h4>
            <h5 className="text-sm text-gray-600">
              {item?.level ?? "Course level"}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
