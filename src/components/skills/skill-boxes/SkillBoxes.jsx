import SkillBox from "./SkillBox";
import { BsWindow } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi2";
import skillData from "../../../data/skills.json"
import { useEffect, useState } from "react";



export default function SkillBoxes({ boxId }) {
    const [clickId, setClickId] = useState(0)
    const component = Object.values(skillData);

    const icons = [BsWindow, FaCode, VscTools, HiOutlineUserGroup];

    const handleBoxClick = (id) => {
        boxId(id);
        setClickId(id)
    }

    return (
        <div className="flex flex-wrap gap-5 xl:gap-14 w-full justify-center">

            {
                component.map((value, id) => {
                    const bg = id == clickId ? true : false
                    return (
                        <div key={id} onClick={() => { handleBoxClick(id) }}>
                            <SkillBox title={value.name} icon={icons[id]} bgcolor={bg} />
                        </div>
                    )
                })
            }
        </div>
    )
}