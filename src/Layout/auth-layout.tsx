import AuthSlider from "../components/auth-slider";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className=" min-h-screen flex">
      <AuthSlider />

      <div className="w-1/2 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
