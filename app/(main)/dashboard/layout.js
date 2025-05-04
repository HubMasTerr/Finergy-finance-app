import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import DashboardPage from "./page";

export default function Layout() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 xl:px-20 py-4 ">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}