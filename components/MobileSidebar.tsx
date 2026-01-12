"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ apiLimit }: { apiLimit: number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar apilimit={apiLimit} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
