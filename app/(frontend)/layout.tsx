import { ReactNode } from "react";

// Normal Imports
import { Navbar } from "@/components/Frontend/Navbar";

const FrontLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default FrontLayout;
