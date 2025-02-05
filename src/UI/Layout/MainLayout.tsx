import Background from "../Background";
import Header from "../Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <Background>
      <Header />
      <Outlet />
    </Background>
  );
}
