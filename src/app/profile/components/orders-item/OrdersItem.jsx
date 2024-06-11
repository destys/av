import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";

import { twMerge } from "tailwind-merge";

import styles from "./OrdersItem.module.scss";
import useOrderDetailsModal from "@/hooks/useOrderDetailsModal";

export default function OrdersItem({ order }) {
  const { onOpen } = useOrderDetailsModal();
  const nowDate = new Date();
  const orderDateParts = order.date.split(".");
  const orderDate = new Date(
    `${orderDateParts[2]}`,
    orderDateParts[1] - 1,
    orderDateParts[0]
  );

  const statusColor = getStatusColor(order.status);

  return (
    <div className={styles.order}>
      <div className="flex-auto">
        <div className={styles.order__top}>
          <div className={styles.order__id}>№{order.id}</div>
          <div
            className={twMerge(
              "py-1 px-4 rounded-x-large text-white",
              statusColor
            )}
          >
            {order.status}
          </div>
        </div>
        <div className={styles.order__title}>{order.title}</div>
        <div className={styles.order__info}>
          <div className="flex items-center gap-2 font-normal ">
            {orderDate < nowDate ? (
              <>
                <Icon name={"calendar"} color={"fill-navy"} size={48} />
                <span>Срочно</span>
              </>
            ) : (
              <>
                <Icon name={"calendar"} color={"fill-navy"} size={48} />
                <span>{order.date}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 font-normal">
            <Icon name={"price"} color={"fill-navy"} size={48} />
            <span>от {order.price} ₽</span>
          </div>
          <div className="flex items-center gap-2 font-normal col-span-2 ">
            <Icon name={"location"} color={"fill-navy"} size={48} />
            <span>{order.address}</span>
          </div>
        </div>
      </div>
      <Button
        style={"outlined"}
        icon={"arrow-link"}
        className="w-full lg:w-auto"
        iconClassName={"max-xs:max-w-6 max-xs:max-h-6"}
        onClick={onOpen}
      >
        Подробнее
      </Button>
    </div>
  );
}

const getStatusColor = (color) => {
  switch (color) {
    case "Новый":
      return "bg-navy";
    case "Отменен":
      return "bg-lynch";
    case "Срочно":
      return "bg-danger";
    case "Выполнен":
      return "bg-[#28C800]";
    default:
      return "";
  }
};
