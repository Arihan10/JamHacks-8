import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import pfp from '/pfp.jpg'
import { LineChart, ScatterChart} from '@mui/x-charts';
import { useDrawingArea } from '@mui/x-charts';

function StudentPreview()
{
  return (
    <div className="flex-grow bg-white p-5 rounded-md flex flex-row">
      <img src={pfp} className="rounded-full w-[6rem] h-[6rem] mr-6"></img>
      <div className='text-zinc-800'>
        <h2 className="font-[900] text-xl">Arihan Sharma</h2>
        <p>I LOVE SKIPPING 😍😍😍😍 📉📉📉</p>
      </div>
    </div>
  )
}

function PerfGraph()
{
  return (
    <div className="flex-grow bg-white rounded-md">
      <LineChart
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        yAxis={[{
          colorMap: {
            type: 'continuous',
            min: -1,
            max: 10,
            color: ['transparent', 'green'],
          }
        }]}
        grid={{ vertical: true, horizontal: true }}
      >
      </LineChart>
    </div>
  )
}

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { blue } from '@mui/material/colors';

function Example()
{
  return (
    <TabGroup className="p-3 space-y-4">
      <TabList className="space-x-3">
          <Tab className="rounded-full py-2 border-gray-800">Tab 1</Tab>
          <Tab className="rounded-full py-2 border-gray-800">Tab 1</Tab>
      </TabList>
      <TabPanels className="text-gray-800">
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  )
}

function StudentProfile()
{
  const [count, setCount] = useState(0)
  console.log("profile!");

  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */

  return (
    <div className="w-screen flex flex-row justify-center">
        <div className="w-[50rem] bg-red-500 font-sgt p-3 rounded-lg space-y-3">
          {/* TOP */}
          <div className="w-full flex flex-row gap-3">
            <StudentPreview/>
            <PerfGraph/>
          </div>
          <div className="w-full  bg-white">
            <Example/>
          </div>
        </div>
    </div>
  )
}

export default StudentProfile