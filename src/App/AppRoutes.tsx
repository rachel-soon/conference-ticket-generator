import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Form from "../Form";
import MainLayout from "../Layout/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route index element={<Form />}></Route>
        </Route>

        {/* Redirect to index */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
