"use client";
import { logoutUser } from "@/store/auth/authSlice";
import { decrement, increment } from "@/store/portfolio/porfolioSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const page = () => {
  let dispatch = useDispatch();
  let { counter } = useSelector((state) => state.portfolio);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  let handleToast = () => {
    toast.success("Hello");
  };
  let handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="container mt-5">
      <Card>
        <CardBody className="text-center">
          <h1 className="mb-4">Counter App</h1>
          <Button color="primary" onClick={handleLogout}>
            Logout
          </Button>
          <div className="d-flex justify-content-center align-items-center my-4">
            <Button color="primary" onClick={handleDecrement}>
              -
            </Button>
            <span className="mx-4 fs-3">{counter}</span>
            <Button color="primary" onClick={handleIncrement}>
              +
            </Button>
          </div>
          <CardText className="text-center mb-4">Dashboard</CardText>
          <div className="d-flex justify-content-center">
            <Button color="primary" className="mb-2" onClick={handleToast}>
              See Toast Message
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <Link href="/public" className="btn btn-primary me-2">
              About
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
