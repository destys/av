import OrdersList from "./components/orders-list/OrdersList";
import ProfileIntro from "./components/profile-intro/ProfileIntro";

export default function ProfilePage() {
  return (
    <div>
      <div className="container">
        <ProfileIntro name={"Павел"} phone={"+7 977 111 11 11"} />
        <OrdersList />
      </div>
    </div>
  );
}
