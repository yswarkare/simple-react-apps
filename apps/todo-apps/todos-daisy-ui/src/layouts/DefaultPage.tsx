import { Suspense } from "react";
import { Outlet } from 'react-router-dom'
import { PageLoader } from "yw-icons";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultPage = () => {
  return (
    <div id="app-root" className="min-w-screen min-h-screen flex flex-col justify-start items-center">
      <Navbar />
      <main className="min-h-[90vh] w-full flex flex-col justify-start items-center">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default DefaultPage;
