import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { useEffect, useState } from "react";
import contactData from "../../../data/contact.json"


export default function ContactLeft() {
    const [toolTipVisible, setToolTipVisible] = useState(false);
    const [dottedEmail,setDottedEmail] = useState(contactData.email)

    useEffect(()=>{
        if(window.innerWidth < 1280){
            setDottedEmail(contactData.email.slice(0, -13) + "...")
        }
    },[])

    const copyEmail = () => {
        navigator.clipboard.writeText(contactData.email)
            .then(() => {
                setToolTipVisible(true)
                setTimeout(() => {
                    setToolTipVisible(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }

    const Tooltip = ({message}) => {
        return (
            <div className="absolute w-48 h-10 bg-black bg-opacity-30 flex items-center rounded-md justify-center text-sm top-2">
                <p>{message}</p>
            </div>
        )
    }
    return (
        <>
            <div className="flex w-full xl:max-w-screen-sm h-full justify-end items-center">
                <div className="h-96 w-full flex flex-col justify-between">
                    <div className="flex w-full h-[45%] justify-around xl:justify-between">
                        <div className="flex w-[45%] xl:w-[49%] h-full border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 justify-center items-center flex-col text-white gap-3 relative">
                            <div onClick={copyEmail} className="w-16 h-16 rounded-xl bg-blue-900 bg-opacity-98 flex justify-center items-center text-white group cursor-pointer" title="Click To Copy">
                                <HiOutlineMail className="w-[50%] h-[50%] duration-200 group-hover:mb-2" />
                            </div>
                            <p onClick={copyEmail}  title="Click To Copy" className="cursor-pointer [text-wrap:wrap] flex">{dottedEmail}</p>
                            {toolTipVisible && <Tooltip message='Email copied!'/>}

                        </div>
                        <div className="flex w-[45%] xl:w-[49%] h-full border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 justify-center items-center flex-col text-white gap-3">
                            <a href={contactData.github.link} target="_blank" className="w-16 h-16 rounded-xl bg-blue-900 bg-opacity-98 flex justify-center items-center text-white  group cursor-pointer" title="GitHub Link">
                                <FaGithub className="w-[50%] h-[50%] duration-200 group-hover:mb-2" />
                            </a>
                            <a href={contactData.github.link} target="_blank">{contactData.github.name}</a>
                        </div>
                    </div>
                    <div className="flex w-full justify-center h-[45%]">
                    <div className="flex w-[95%] xl:w-full h-full border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 justify-center items-center flex-col text-white gap-3">
                        <a href={contactData.cvLink} target="_blank" className="w-16 h-16 rounded-xl bg-blue-900 bg-opacity-98 flex justify-center items-center text-white group cursor-pointer" title="CV Link">
                            <SiReaddotcv className="w-[50%] h-[50%] duration-200 group-hover:mb-2" />
                        </a>
                        <a href={contactData.cvLink} target="_blank">CV(Curriculum Vitae)</a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}