import React, { useState } from "react";
import {
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { HiOutlineNewspaper } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function ViewModalSoyHenry() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<string>("md");

  const sizes = ["4xl"];

  const handleOpen = (selectedSize: string) => {
    setSize(selectedSize);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((selectedSize) => (
          <Tooltip
            showArrow={true}
            content="Ver Curriculum Vitae"
            key={selectedSize}
          >
            <Button
              onClick={() => handleOpen(selectedSize)}
              className="bg-transparent"
            >
              <HiOutlineNewspaper className="text-xl" />
            </Button>
          </Tooltip>
        ))}
      </div>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-2xl font-semibold">
                LiHuel Zerega | Curriculum Vitae
              </ModalHeader>
              <ModalBody className="flex flex-col sm:flex-row">
                <div className="w-auto sm:w-1/2">
                  <p>
                    Villa Luzuriaga, Buenos Aires, Argentina · (011) 4408-0057
                    <br />
                    zeregalihuel@gmail.com ·{" "}
                  </p>
                  <p className="mt-4">
                    Computer Engineering student with training in web
                    technologies and experience in self-taught graphic design. I
                    consider myself a person who interrelates creativity and
                    analytical vision in day-to-day performance. Besides, I
                    focus on solving problems both at the level individually and
                    as a group and I am challenged by the challenges that Allow
                    me to develop and learn.
                  </p>
                </div>
                <div className="hidden w-auto sm:flex flex-col items-center justify-center sm:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dszjgdktf/image/upload/v1693869346/cv_preview_yxjhfy.png"
                    width={200}
                    height={100}
                    alt="Certificado de Soy Henry"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Link href="https://drive.google.com/file/d/13lLlclR-P9dd6icdljGj9ddkA3UFVFpL/view?usp=sharing">
                  <Button className="">
                    View Curriculum Vitae
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
