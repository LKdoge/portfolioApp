'use client';
import React from "react";
import { useAppSelector } from "@/lib/hooks";

const AuthViewer = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <div className="flex gap border border-1 border-black p-20">
      You are now {authState ? "Logged  In" : "Logged Out"}
    </div>
  );
};
export default AuthViewer;