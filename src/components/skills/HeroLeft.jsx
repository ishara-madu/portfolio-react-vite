import SkillBoxes from "./skill-boxes/SkillBoxes";

export default function HeroLeft({boxId}){
    return(
        <div className="flex flex-col h-auto w-full xl:w-2/4 justify-center items-baseline xl:mb-0 mb-5">
        <SkillBoxes boxId={boxId}/>
        </div>
    )
}