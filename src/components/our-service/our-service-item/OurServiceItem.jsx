import Image from "next/image";

export default function OurServiceItem({ item }) {
  return (
    <div className="p-[15px] xs:p-5 sm:p-large rounded-2xl xs:rounded-large bg-navy-100">
      <div className="flex justify-between gap-5 mb-5 py-2.5">
        <span className="leading-none font-bold text-navy text-6xl sm:text-7xl md:text-8xl">
          {item.id + 1}
        </span>
        <Image
          src={`/illustrations/${item.icon}.svg`}
          width={96}
          height={96}
          alt={item.title}
          className="hidden sm:block"
        />
      </div>
      <h5 className="mb-5">{item.title}</h5>
      <p className="leading-none">{item.text}</p>
    </div>
  );
}
