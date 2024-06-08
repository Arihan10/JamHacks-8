import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import pfp from '/pfp.jpg'

function StudentPreview()
{
  return (
    <div className="flex-grow bg-white p-5 rounded-md flex flex-row">
      <img src={pfp} className="rounded-full w-[6rem] mr-6"></img>
      <div className='text-zinc-800'>
        <h2 className="font-[900] text-xl">Arihan Sharma</h2>
        <p>I LOVE SKIPPING 😍😍😍😍 📉📉📉</p>
      </div>
    </div>
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
        <div className="w-[50rem] bg-red-500 font-sgt p-3 rounded-lg">
          {/* TOP */}
          <div className="w-full flex flex-row gap-3">
            <StudentPreview/>
            <StudentPreview/>
          </div>
            <p>blah blah</p>
        </div>
    </div>
  )
}

export default StudentProfile