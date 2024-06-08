"use client";
import { useState, useContext, CSSProperties } from "react"
import { UserContext } from "./app/layout";
import Backdrop from "./common/backdrop";
import { motion, AnimatePresence } from "framer-motion";
// import BouncingDotsLoader from "../../common/loader/loader";

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

export default function ContractOverlay() {
    const { authOverlay, setAuthOverlay } = useContext(UserContext);
    const { user, setUser } = useContext(UserContext);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [userState, setUserState] = useState({ state: 'empty', msg: '' })
    const [passState, setPassState] = useState({ state: 'empty', msg: '' })

    const [loading, setLoading] = useState(false)

    const modal = (
        <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={loginAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[30rem] bg-black/95 rounded-2xl border-2 border-zinc-900/50 p-10 flex flex-col gap-5 pointer-events-auto overflow-clip"
        >
            <h1 className="font-sg text-4xl font-bold text-gray-300">Get Started!</h1>
            <p className="text-gray-400">An account will allow you to save your progress, participate in contests, and more!</p>

            <div>
                <label className="text-sm text-rose-600">{userState.msg}</label>
                <input className="shadow appearance-none border border-blue-500/20 rounded w-full py-2 px-3 text-gray-300 bg-slate-950 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                    onChange={e => {
                        setUsername(e.target.value)
                    }}
                />
            </div>

            <div>
                <label className="text-sm text-rose-600">{passState.msg}</label>
                <input className="shadow appearance-none border border-blue-500/20 rounded w-full py-2 px-3 text-gray-300 bg-slate-950 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                />
            </div>

            <div className="flex flex-row w-full gap-5">
                <button
                    className="bg-blue-950 hover:bg-slate-950/50 duration-200 text-gray-300 font-semibold py-3 px-4 border-2 border-blue-800/20 rounded shadow inline-flex items-center grow"
                    onClick={() => {
                        setLoading(true);
                        console.log("start loading");

                        AuthService.SignUp({ username, password }, setUserState, setPassState, setUser, setAuthOverlay)
                        .then(() => {
                            console.log("end loading");
                            setLoading(false)
                        });
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                    </svg>
                    <span className="text-center w-full">Sign Up</span>
                </button>

                <button
                    className="bg-blue-950 hover:bg-slate-950/50 duration-200 text-gray-300 font-semibold py-3 px-5 border-2 border-blue-800/20 rounded shadow inline-flex items-center grow"
                    onClick={() => {
                        setLoading(true);
                        console.log("start loading");

                        AuthService.Login({ username, password }, setUserState, setPassState, setUser, setAuthOverlay)
                        .then(() => {
                            console.log("end loading");
                            setLoading(false)
                        });
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="text-center w-full">Log In</span>
                </button>
            </div>

            <AnimatePresence
                initial={true}
                mode='wait'
                onExitComplete={() => null}
            >
                {loading &&
                    <motion.div className="absolute bg-black/80 w-full h-96 col-span-1 row-span-1 -m-10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <BouncingDotsLoader />
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )

    return (
        <Backdrop
            onClick={() => {
                if(!loading)
                {
                    setAuthOverlay(false)
                }
            }}
            children={modal}>
        </Backdrop>
    );
}
