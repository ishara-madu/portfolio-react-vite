import Percentage from "./Percentage";
import skillData from "../../../data/skills.json"

export default function LevelBox({ boxId }) {

    const component = Object.values(skillData);
    const skillSet = Object.values(component[boxId].skills)

    return (
        <>
            <div className="w-11/12 h-72 xl:h-96 bg-black bg-opacity-30 border-blue-600 border xl:border-2 rounded-2xl flex flex-col items-center">
                <div className="w-full h-11 xl:h-16 border-b xl:border-b-2 border-blue-600 text-blue-600 text-md xl:text-xl font-semibold flex items-center pl-10 mb-4 xl:mb-10">
                    {component[boxId].name}

                </div>
                {
                    skillSet.map((value, id) => {
                        return (
                                <Percentage key={id} title={value.name} perc={value.perc} />
                        )
                    })
                }

            </div>
        </>
    )
}