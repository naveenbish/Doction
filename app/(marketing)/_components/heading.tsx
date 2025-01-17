'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Doction</span></h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">Doction is the connected workspace where <br /> better, faster work happens.</h3>
      <Button>Enter Doction <ArrowRight className="h-4 w-4 ml-2" /></Button>
    </div>
  )
}
