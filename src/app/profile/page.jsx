import Button from "@/components/ui/button/Button";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <section className=" my-20">
      <div className="container flex gap-3">
        <Button>
          <Link href="/profile/client">Клиент</Link>
        </Button>
        <Button>
          <Link href="/profile/partner">Партнер</Link>
        </Button>
      </div>
    </section>
  );
}
