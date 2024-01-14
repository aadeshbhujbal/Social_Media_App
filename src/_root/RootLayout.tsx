import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Topbar } from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

/**
 * Root layout component that renders the common page structure:
 * - Topbar
 * - Left sidebar
 * - Main content area
 * - Bottom bar
 * Uses Outlet to render child route components in the main content area.
 */
const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;
