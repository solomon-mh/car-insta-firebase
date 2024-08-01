import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import RootLayout from "./_root/RootLayout";
import "./global.css";
import {
  AllUsers,
  Home,
  Explore,
  PostDetails,
  EditPost,
  CreatePost,
  Saved,
} from "./_root/pages";
import { Toaster } from "@/components/ui/toaster";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>
        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
