"use client";
import { useState } from "react";
import { LineChart, ScatterChart } from "@mui/x-charts";
import pfp from "/public/pfp.jpg";
import Markdown from "react-markdown";
import { People, PeopleFill, Linkedin, GraphUpArrow, Coin, PersonCircle} from "react-bootstrap-icons";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Line,
} from "recharts";

const summary = {
  name: "Arihan Sharma",
  desc: `### Hi there! 👋
- I'm **Arihan Sharma**, a Canadian Senior passionate about **Computer Engineering**. 😄
- 🌱 I’m experienced in **fullstack development**.
- ⚡ I love working with **C++**, **Java**, **C#**, **Python**.

Check out my [portfolio!](https://frostbiiten.github.io/mypage)
			`,
  investors: 20,
};

function PerfGraph() {
  const dataArr = Array.from(
    { length: 30 },
    (_, ind) => 100 + ind * 3 + Math.floor(Math.sqrt(ind) * Math.random() * 20)
  );
  const data = dataArr.map((value, index) => ({
    x: index,
    value,
  }));

  const max = Math.max(...dataArr);
  const min = Math.min(Math.min(...dataArr), 0);
  const delta = dataArr[dataArr.length - 1] - dataArr[0];
  const col = delta < 0 ? "red" : "#34d399";
  console.log(min);
  return (
    <div className="bg-transparent rounded-md w-full h-full">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={col} stopOpacity={0.5} />
              <stop offset="90%" stopColor={col} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis dataKey="x" tickCount={3} />
          <YAxis domain={[min, max + 30]} tickCount={20} />
          <CartesianGrid
            strokeDasharray={[]}
            strokeWidth={2}
            strokeOpacity={0.15}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke={col}
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function Tabs() {
  return (
    <TabGroup className="p-3 flex-grow">
      <TabList className="space-x-3">
        <Tab className="rounded-lg outline-none rounded-b-none py-2 border-zinc-800 border-b-0 border-2 ui-not-selected:opacity-40 hover:border-zinc-500 ui-selected:border-green-500/60 ui-selected:bg-green-950/30 duration-300 transition-all hover:px-7 ui-selected:px-10">
          <div className="flex flex-row gap-3 items-center">
            <PersonCircle/>
            Students
          </div>
        </Tab>
        <Tab className="rounded-lg outline-none rounded-b-none py-2 border-zinc-800 border-b-0 border-2 ui-not-selected:opacity-40 hover:border-zinc-500 ui-selected:border-green-500/60 ui-selected:bg-green-950/30 duration-300 transition-all hover:px-7 ui-selected:px-10">
          <div className="flex flex-row gap-3 items-center">
            <GraphUpArrow/>
            Performance
          </div>
        </Tab>
      </TabList>
      <TabPanels className="h-[32rem] leading-6 text-gray-300">
        <TabPanel className="h-full w-full rounded-b-2xl border-2 border-zinc-800 p-4 flex flex-row flex-wrap gap-3">
          <Investor/>
          <Investor/>
          <Investor/>
          <Investor/>
        </TabPanel>
        <TabPanel className="w-full h-full">
          <div className="flex flex-row justify-center">
            <h1 className="text-zinc-300 text-4xl font-[600] ml-12 my-6">
              Performance
            </h1>
          </div>
          <PerfGraph />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function StudentPreview() {
  return (
    <div className="w-[18rem] border-zinc-800 border-2 text-zinc-100 p-8 rounded-md flex flex-col gap-5 h-min">
      <Image
        alt="Profile Picture"
        src={pfp}
        className="rounded-full w-full"
      ></Image>
      <div className="text-zinc-300 gap-4">
        <h2 className="font-[600] text-zinc-100 text-xl">Arihan Sharma</h2>
        <p className="font-[400] text-zinc-400 text-md">@Arihan10</p>
        <hr class="h-px mt-5 mb-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="h-2" />
        <Link href="https://www.google.com">
          <div
            className="flex flex-row items-center gap-2 hover:font-[900] transition-all duration-500
						border-[2px] border-emerald-700
						text-emerald-500 hover:text-emerald-300
						rounded-lg py-[0.2rem] justify-center"
          >
            <PeopleFill />
            <p>
              <b>{summary.investors}</b> Investors
            </p>
          </div>
        </Link>
        {false && (
          <Markdown className="space-y-2 leading-7">{summary.desc}</Markdown>
        )}
      </div>
    </div>
  );
}

function Investor()
{
  return (
  <div href="https://google.com" className="border-2 w-1/3 bg-gray-50/[0.02] border-white/20 rounded-xl p-6 flex gap-2">
    <Image src={pfp} className="rounded-full h-16 w-16"/>
    <div className="pl-3">
      <h3 className="font-bold text-xl">Investor</h3>
      <p className="text-gray-100/60">Among us</p>
    </div>
  </div>
  );
}

function StudentProfile() {
  const [count, setCount] = useState(0);
  console.log("profile!");
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="min-w-[50rem] w-7/8 max-w-[120rem] bg-red-500/0 font-sgt p-3 rounded-lg gap-8 flex flex-row">
        {/* TOP */}
        <StudentPreview />
        <div className="space-y-4">
          <Markdown className="space-y-4 border-zinc-800 border-2 rounded-md p-10">
            {summary.desc}
          </Markdown>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
