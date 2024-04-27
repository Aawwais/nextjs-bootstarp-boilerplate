"use client";
import { logoutUser } from "@/store/auth/authSlice";
import { loginUser } from "@/store/auth/authThunk";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

const page = () => {
  let dispatch = useDispatch();
  const { push } = useRouter();
  const handleLogin = () => {
    dispatch(loginUser());
  };
  let token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      dispatch(logoutUser());
    } else {
      push("/admin/dashboard");
    }
  }, []);
  return (
    <div>
      <Button color="primary" className="m-4" onClick={handleLogin}>
        login
      </Button>

      <Link href={"/admin/dashboard"} className="btn btn-primary m-4">
        dashboard
      </Link>
    </div>
  );
};

export default page;
