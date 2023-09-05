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
import { PiCertificateBold } from "react-icons/pi";
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
            content="View Certificate"
            key={selectedSize}
          >
            <Button
              onClick={() => handleOpen(selectedSize)}
              className="bg-transparent"
            >
              <PiCertificateBold className="text-xl" />
            </Button>
          </Tooltip>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-2xl font-semibold">
                Soy Henry | Full Stack Developer Certificate
              </ModalHeader>
              <ModalBody className="flex flex-col sm:flex-row">
                <div className="w-auto sm:w-1/2">
                  <p>
                    The following certificate fully guarantees my studies in {" "}
                    <b>Soy Henry</b> as a Full Stack Developer, in which I
                    learned the following development technologies Web:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="hidden w-auto sm:flex flex-col items-center justify-center sm:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dszjgdktf/image/upload/v1693843102/HenryCertificate_h9rwb8.png"
                    width={300}
                    height={100}
                    alt="Certificado de Soy Henry"
                    className=""
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Link href="https://certificates.soyhenry.com/new-cert?id=fd8b76cf5d69fe9cdf72c249372c9df591810e51cf707a1800cda6edce3ab0d5">
                  <Button className="bg-yellow-300">View Certificate</Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
