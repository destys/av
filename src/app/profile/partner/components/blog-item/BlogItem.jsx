import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function BlogItem({ item }) {
  const statusColor = getStatusColor(item.status);

  return (
    <article className="p-2.5 xs:p-5 md:p-large bg-white rounded-2xl xs:rounded-large">
      <div className="mb-4 xs:mb-5 md:mb-space-large">
        <Image
          src={`/blog/${item.image}`}
          width={777}
          height={280}
          alt={item.title}
          className="rounded-[15px] min-h-52 md:min-h-[250px] xl:min-h-[280px]"
        />
      </div>
      <div className="flex justify-between items-center gap-2 mb-4">
        <div className="flex items-center gap-3">
          <Icon
            name={"calendar"}
            size={36}
            color={"fill-navy"}
            className="max-w-6 md:max-w-none"
          />
          <p>{item.date}</p>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-3">
            <Icon
              name={"views"}
              size={36}
              color={"fill-navy"}
              className="max-w-6 md:max-w-none"
            />
            <p>4 206</p>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              name={"comments"}
              size={36}
              color={"fill-navy"}
              className="max-w-6 md:max-w-none"
            />
            <p>61</p>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          "mb-4 py-1 px-4 rounded-x-large text-white w-fit",
          statusColor
        )}
      >
        {item.status}
      </div>
      <h3 className="mb-4 font-semibold text-lg md:text-[25px] xl:text-3xl">{item.title}</h3>
      <p className="mb-4 xs:mb-5 md:mb-space-large line-clamp-4 text-lynch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta
        magni eveniet sunt laboriosam mollitia repudiandae voluptates! Ea, quas
        nulla. Enim, accusamus laborum. Blanditiis, quisquam. Possimus ipsam
        beatae repellat placeat. Doloribus quasi nobis ipsum quo repudiandae
        cupiditate, unde molestias, reiciendis officia corporis consequuntur
        quas numquam? Maiores dicta vitae, amet repellat ipsum voluptas
        temporibus tenetur minus recusandae quam similique aperiam odio!
      </p>
      <div className="flex justify-between items-center gap-2">
        <Button style={"outlined"} className="md:py-3 font-normal">
          Редактировать
        </Button>
        <Icon
          name={"trash"}
          size={48}
          color={"fill-danger"}
          className="cursor-pointer"
        />
      </div>
    </article>
  );
}

const getStatusColor = (color) => {
  switch (color) {
    case "На модерации":
      return "bg-navy";
    case "Черновик":
      return "bg-lynch";
    case "Опубликовано":
      return "bg-[#28C800]";
    default:
      return "";
  }
};
