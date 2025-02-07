import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Form from "../Form";
import MainLayout from "../UI/Layout/MainLayout";
import Ticket from "../Ticket";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<Form />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
        </Route>

        {/* Redirect to index */}
        {/* TODO: implement 404 page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
