import React from "react";
import Image from "next/image";
import LogoAmazon from "../../public/images/logo-amazon.svg";
import LogoGoogle from "../../public/images/logo-google.svg";
import LogoMicrosoft from "../../public/images/logo-microsoft.svg";
import LogoTesla from "../../public/images/logo-tesla.svg";
import LogoFacebook from "../../public/images/logo-facebook.svg";

export default function Clients() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6">
        <Image src={LogoAmazon} alt="Logo Amazon"/>
      </div>
      <div className="w-1/6">
        <Image src={LogoMicrosoft} alt="Logo Microsoft"/>
      </div>
      <div className="w-1/6">
        <Image src={LogoTesla} alt="Logo Tesla"/>
      </div>
      <div className="w-1/6">
        <Image src={LogoGoogle} alt="Logo Google"/>
      </div>
      <div className="w-1/6">
        <Image src={LogoFacebook} alt="Logo Facebook"/>
      </div>
    </div>
  );
}
