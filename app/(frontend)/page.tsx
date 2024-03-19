"use client";

import { FC } from "react";

// Normal Imports
import { HeroSection } from "@/components/Frontend/HeroSection";

const FrontPage: FC = () => {
  return (
    <>
      <section className="bg-blue-950">
        <HeroSection />
      </section>
    </>
  );
};

export default FrontPage;
