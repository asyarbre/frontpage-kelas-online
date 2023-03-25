import React from "react";
import Preview from "../../../public/images/icon-preview.svg";
import Modal from "../../components/Modal";
import Image from "next/image";

export default function CoursePhoto({ data }) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
      <div className="item relative">
        <figure className="item-image">
          <Image src={Preview} alt="Preview" />
          <Image
            src={data}
            alt={data}
            width={100}
            height={150}
            className="object-cover h-40 md:h-32 w-full"
          />
        </figure>
        <Modal content={(toggle) => <Image src={data} alt={data} width={1000} height={1000}/>}>
          {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
        </Modal>
      </div>
    </div>
  );
}
