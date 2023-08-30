"use client";
import React from "react";
import { Image } from "@nextui-org/image";

export default function ImImage() {
  return (
      <Image
        isBlurred
        width={400}
        src="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
        alt="Yo Image"
        className=""
      />
  );
}