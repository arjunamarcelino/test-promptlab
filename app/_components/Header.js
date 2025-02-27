"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { PrimaryButton, SecondaryButton } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { scrollToSection } from "../_libs/uiUtils";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
      transition={{ delay: 0.1, type: "spring", stiffness: "100" }}
      className="fixed w-full top-6 lg:top-[10px] left-0 z-50 overflow-hidden pointer-events-none"
    >
      <header className="max-lg:hidden flex items-center justify-between px-4 mx-auto max-w-[1353px] sm:px-6 lg:px-8 h-16 lg:h-20 pr-3 pl-8 pointer-events-auto">
        <motion.button
          whileHover={{
            scale: 1.05,
            originX: 0.3,
          }}
          transition={{ type: "spring", stiffness: 250 }}
          className="h-[21px] w-[109px]"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src={"/images/img-promptlab-logo.png"}
            alt="promptlab logo"
            width={700}
            height={700}
            priority
            className="w-full h-full object-contain"
          />
        </motion.button>
        <nav className="flex items-center gap-[56px] text-lg text-primary-100">
          <button
            className="hover:text-secondary-400 transition-all"
            onClick={() => scrollToSection("")}
          >
            Docs
          </button>
          <button
            className="hover:text-secondary-400 transition-all"
            onClick={() => window.open()}
          >
            Model
          </button>
          <button
            className="hover:text-secondary-400 transition-all"
            onClick={() => window.open()}
          >
            Resource
          </button>
          <button
            className="hover:text-secondary-400 transition-all"
            onClick={() => window.open()}
          >
            Installation
          </button>
        </nav>
        <PrimaryButton
          onClick={() => window.open()}
          className="max-w-[138px] w-[138px]"
        >
          Get $PLABS
        </PrimaryButton>
      </header>
      <div className="flex py-1 ml-auto pointer-events-none">
        <Sidebar />
      </div>
    </motion.div>
  );
}

const Sidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <>
      <SecondaryButton
        onClick={onOpen}
        className="lg:hidden w-[40px] h-[38px] rounded-xl p-0 ml-auto mr-6 pointer-events-auto flex justify-center items-center"
      >
        <IoMdMenu size={24} />
      </SecondaryButton>
      <Modal
        hideCloseButton
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-background text-foreground h-[60vh] relative mx-8">
          {(onClose) => (
            <>
              <div className="p-6 w-fit">
                <motion.button
                  whileHover={{ scale: 1.05, originX: 0.3 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="h-5 w-[77px]"
                  onClick={() => {
                    scrollToSection("hero");
                    onClose();
                  }}
                >
                  <Image
                    src={"/images/img-promptlab-logo.png"}
                    alt="promptlab logo"
                    width={700}
                    height={700}
                    className="w-full h-full object-contain"
                  />
                </motion.button>
              </div>
              <SecondaryButton
                onClick={onClose}
                className="w-[24px] h-[24px] rounded-full p-0 ml-auto absolute top-4 right-4 flex justify-center items-center"
              >
                <IoMdClose />
              </SecondaryButton>
              <ModalBody className="items-start">
                <nav className="text-white flex flex-col items-start gap-6 text-base">
                  <button
                    className="hover:text-primary-100 transition-all"
                    onClick={() => {
                      scrollToSection("");
                      onClose();
                    }}
                  >
                    Docs
                  </button>
                  <button
                    className="hover:text-primary-100 transition-all"
                    onClick={() => {
                      window.open();
                      onClose();
                    }}
                  >
                    Model
                  </button>
                  <button
                    className="hover:text-primary-100 transition-all"
                    onClick={() => {
                      window.open();
                      onClose();
                    }}
                  >
                    Resource
                  </button>
                  <button
                    className="hover:text-primary-100 transition-all"
                    onClick={() => {
                      window.open();
                      onClose();
                    }}
                  >
                    Installation
                  </button>
                </nav>
              </ModalBody>
              <ModalFooter className="justify-start">
                <PrimaryButton
                  onClick={() => {
                    window.open();
                    onClose();
                  }}
                  className="max-w-[138px] w-[138px]"
                >
                  Get $PLABS
                </PrimaryButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
