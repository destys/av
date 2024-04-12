import OrdersList from "./components/orders-list/OrdersList";
import ProfileIntro from "./components/profile-intro/ProfileIntro";

export default function ClientPage({ user }) {
  return (
    <div>
      <div className="container">
        <ProfileIntro
          name={user.name || "Имя не задано"}
          phone={user.phone || "Телефон не задан"}
        />
        <OrdersList />
      </div>
    </div>
  );
}
