import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants";
import { INavLink, IUser } from "@/types";
import { getCurrentUser, signOutUser } from "@/lib/firebase/api";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function handleSignOut() {
    signOutUser();
    navigate("/sign-in");
  }
  const [user, setUser] = useState<IUser | null>(null);
  // console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user as IUser | null);
      } catch (error) {
        console.log("Error Fetching User", error);
      }
    };
    fetchUser();
  }, []);
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link to={`/profile/`} className="flex items-center gap-3">
          <img
            src={"/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user?.name}</p>
            <p className="small-regular text-light-3">@{user?.username}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-3"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        onClick={() => handleSignOut()}
        variant="ghost"
        className="shad-button_ghost"
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p title="" className="small-medium lg:base-medium">
          LogOut
        </p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
