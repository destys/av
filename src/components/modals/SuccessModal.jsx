"use client";

import Button from "../ui/button/Button";
import Modal from "./Modal";

import styles from "./SuccessModal.module.scss";
import useSuccessModal from "@/hooks/useSuccessModal";

export default function SuccessModal() {
  const { onClose, isOpen } = useSuccessModal();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"max-w-[800px]"}
    >
      <div className="p-large">
        <h2 className="mb-space-large text-center">
          Спасибо, ваша заявка успешно оформлена!{" "}
        </h2>
        <div class={styles.successAnimation}>
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={styles.checkmark__circle}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class={styles.checkmark__check}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <Button onClick={onClose} style="filled-full">Завершить</Button>
      </div>
    </Modal>
  );
}
