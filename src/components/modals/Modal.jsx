"use client";

import * as Dialog from "@radix-ui/react-dialog";

import IconButton from "../ui/iconButton/IconButton";
import { twMerge } from "tailwind-merge";

const revalidate = 0;

export default function Modal({
  isOpen,
  onChange,
  title,
  children,
  contentClassNames,
}) {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-sapphire bg-opacity-30 
            backdrop-blur-sm 
            fixed 
            inset-0
            z-[2999]
          "
        />
        <Dialog.Content
          className={twMerge(
            "fixed drop-shadow-md top-[50%] left-[50%] max-w-[680px] max-h-full  h-full  md:h-auto md:max-h-[92vh] w-full translate-x-[-50%] translate-y-[-50%] lg:rounded-large overflow-y-auto scrollbar-hide focus:outline-none z-[3000]",
            contentClassNames
          )}
        >
          {title && (
            <Dialog.Title className="flex justify-between items-center gap-3 p-5 md:px-x-large md:py-large 2xl:py-large 2xl:px-x-large bg-sapphire">
              <div className="font-semibold text-white text-2xl lg:text-4xl xl:text-5xl">
                {title}
              </div>
              <Dialog.Close asChild>
                <IconButton
                  icon="close"
                  type={"outlined"}
                  className={
                    "bg-white max-w-[35px] max-h-[35px] md:max-w-[60px] md:max-h-[60px] lg:max-w-none lg:max-h-none"
                  }
                />
              </Dialog.Close>
            </Dialog.Title>
          )}

          <div className="p-5 lg:px-x-large lg:py-large bg-lynch-100">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
