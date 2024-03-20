"use client";

import { FC } from "react";

// Normal Imports
import { HeroSection } from "@/components/Frontend/HeroSection";
import { MegaMenu } from "@/components/Frontend/MegaMenu";

const FrontPage: FC = () => {
  return (
    <>
      <section className="bg-blue-950">
        <div className="max-w-6xl mx-auto text-gray-600 py-6">
          <MegaMenu />
        </div>

        <HeroSection />
      </section>
    </>
  );
};

export default FrontPage;
