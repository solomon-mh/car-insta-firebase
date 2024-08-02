import { Outlet, Navigate } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData3 from "../../public/assets/animation-data4.json";
import { useRef } from "react";
const AuthLayout = () => {
  const isAuthenticated = false;
  const carRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center bg-transparent  items-center flex-col py-10">
            <Outlet />
          </section>
          <div className="hidden lg:flex h-screen items-center w-1/2 relative overflow-hidden">
            <div className="absolute inset-0"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                loop={true}
                lottieRef={carRef}
                animationData={animationData3}
                className="absolute inset-0 object-cover animation-move"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
