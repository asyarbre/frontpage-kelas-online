import React from "react";
import RenderItem from "./RenderItem";
import Link from "next/link";

import BusinessDevelopment from "public/images/business-development.svg";
import ContentWriter from "public/images/content-writer.svg";
import CustomerRelationship from "public/images/customer-relationship.svg";
import ProductAdvertisement from "public/images/product-advertisement.svg";
import TravelGuidance from "public/images/travel-guidance.svg";
import GameDevelopment from "public/images/game-development.svg";

export default function ListCategories() {
  const data = [
    {
      imageName: BusinessDevelopment,
      name: "Business Development",
      total: 12,
    },
    {
      imageName: ContentWriter,
      name: "Content Writer",
      total: 14,
    },
    {
      imageName: CustomerRelationship,
      name: "Customer Relationship",
      total: 16,
    },
    {
      imageName: ProductAdvertisement,
      name: "Product Advertisement",
      total: 18,
    },
    {
      imageName: TravelGuidance,
      name: "Travel Guidance",
      total: 20,
    },
    {
      imageName: GameDevelopment,
      name: "Game Development",
      total: 22,
    }
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-gray-900">
            Explore & <span className="text-teal-400">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
