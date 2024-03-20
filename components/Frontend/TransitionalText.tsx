"use client";

import { FC, useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

interface CompProps {
  TEXTS: string[];
  className?: string;
}

export const TransitionalText: FC<CompProps> = ({ TEXTS, className }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);

    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <span className={className}>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}&nbsp;
        </TextTransition>
      </span>
    </>
  );
};
