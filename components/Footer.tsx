import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex flex-col-reverse sm:flex-row items-center justify-around py-6">
        <h3>@2023. All Rights Reserved</h3>
        <h3>Designed by Lihuel Zerega</h3>
        <div className="flex flex-row items-center">
          <Link href="https://www.linkedin.com/in/lihuelzerega/">
            <AiFillLinkedin className="text-xl text-default-500" />
          </Link>
          <Link href="https://github.com/LihuelZerega">
            <GithubIcon className="text-xl text-default-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
