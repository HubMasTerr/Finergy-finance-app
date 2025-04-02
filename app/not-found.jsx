import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
      {/* <Link href="/dashboard">
          <Button>
            Return Home</Button></Link> */}
      <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go Home
      </a>
    </div>
  ); 
};

export default notFound;
