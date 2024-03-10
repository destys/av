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
            "fixed drop-shadow-md top-[50%] left-[50%] max-w-[680px] max-h-full  h-full  md:h-auto md:max-h-[92vh] w-full translate-x-[-50%] translate-y-[-50%] rounded-large overflow-y-auto scrollbar-hide focus:outline-none z-[3000]",
            contentClassNames
          )}
        >
          {title && (
            <Dialog.Title className="flex justify-between items-center gap-3 py-7 px-9 2xl:py-large 2xl:px-x-large bg-sapphire">
              <div className="font-semibold text-white text-5xl">{title}</div>
              <Dialog.Close asChild>
                <IconButton
                  icon="close"
                  type={"outlined"}
                  className={"bg-white"}
                />
              </Dialog.Close>
            </Dialog.Title>
          )}

          <div className="py-7 px-9 2xl:p-x-large 2xl:pt-large bg-lynch-100">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
