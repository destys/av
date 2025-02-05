import Image from "next/image";
import Link from "next/link";

export default function Logotype({ width, height, src, className }) {
  return (
    <Link href={"/"} className={className}>
      <Image
        src={src || "/logo.svg"}
        width={width || 391}
        height={height || 41}
        alt="logotype"
        className="max-w-[234px] md:max-w-[360px] xl:max-w-none"
      />
    </Link>
  );
}
