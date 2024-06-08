"use client"
import { Navigation } from "@/components/Navigation";
import "@/app/globals.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import ContractOverlay from "@/contract";
import { useState } from "react";
import CreateContractOverlay from "@/createContract";

// context
export const UserContext = React.createContext(null);

// Layout Component
export default function RootLayout({ children })
{
  const [displayContract, setDisplayContract] = useState(true);

  return (
    <UserContext.Provider value={{ displayContract: displayContract, setDisplayContract: setDisplayContract }}>
      <html lang="en">
        <body className="flex flex-col">
          <Navigation />
          {children}

          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {displayContract && <CreateContractOverlay />}
          </AnimatePresence>

        </body>
      </html>
    </UserContext.Provider>
  );
}
