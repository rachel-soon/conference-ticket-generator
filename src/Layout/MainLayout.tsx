import Background from "../UI/Background";
import Header from "../UI/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <Background>
      <Header />
      <Outlet />
    </Background>
  );
}
