"use client";
import { useState } from "react";
import { LineChart, ScatterChart } from "@mui/x-charts";
import pfp from "/public/pfp.jpg";
import Markdown from "react-markdown";
import { PersonCircle, } from "react-bootstrap-icons";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import Backdrop from "@/common/backdrop";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const loginAnim = {
    hidden: {
        opacity: 0,
        y: "-90px"
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: "0",

        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 500,
        }
    },
    exit: {
        scale: 0.9,
        y: "-30px"
    },
}

const summary = {
  name: "Arihan Sharma",
  desc: `I have been skipping all my classes (I'm cooked)`,
  email: 'sofwarearihan@gmail.com',
  investors: 20,
};

function Student(dat) {
  const data = dat.data;

  return (
    <button className="p-3 bg-transparent">
      <div
        href="https://google.com"
        className="duration-300 transition-all hover:border-[1.5px] bg-gray-50/[0.01] hover:bg-gray-50/[0.05] hover:shadow-sm border-gray-300/20 rounded-xl p-6 flex flex-col gap-3 w-full"
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={pfp} className="rounded-full w-2/3" />
          <h3 className="font-bold text-sm md:text-lg">{data.name}</h3>
        </div>
        <div className="pl-3">
          <p className="text-gray-100/60 font-[400]">{data.desc}</p>
        </div>
      </div>
    </button>
  );
}

function Tabs() {
  return (
    <TabGroup className="p-3 flex-grow min-w-[20rem] max-w-[65rem] w-11/12">
      <TabList className="space-x-3">
        <Tab className="rounded-lg outline-none rounded-b-none py-2 border-zinc-800 border-b-0 border-2 ui-not-selected:opacity-40 hover:border-zinc-500 ui-selected:border-green-500/60 ui-selected:bg-green-950/30 duration-300 transition-all hover:px-7 ui-selected:px-10">
          <div className="flex flex-row gap-3 items-center">
            <PersonCircle />
            Students
          </div>
        </Tab>
      </TabList>
      <TabPanels className="text-gray-300">
        <TabPanel className="h-full w-full rounded-b-2xl border-2 border-zinc-800 p-3 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
          <Student data={summary} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function InvestorDash() {
  return (
    <div className="w-screen flex flex-col justify-center items-center font-sgt">
      <div className="min-w-[20rem] max-w-[65rem] w-11/12 font-sgt p-3 rounded-lg gap-8 flex flex-row">
        <div className="group w-full">
          <h1 className="font-bold w-full h-32 from-emerald-600/40 to-zinc-800 group-hover:to-green-500 bg-gradient-to-tr rounded-xl duration-500 transition-all p-[1px] group-hover:p-[4px]">
            <div className="w-full h-full flex items-center justify-center bg-[#101010] rounded-[12px]">
              Investor Dashboard
            </div>
          </h1>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default InvestorDash;
