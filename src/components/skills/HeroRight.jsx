import LevelBox from "./level-box/LevelBox";

export default function HeroRight({boxId}){
    return(
        <div className="flex flex-col h-auto w-full xl:w-2/4 justify-center items-center xl:items-baseline">
        <LevelBox boxId={boxId}/>
        </div>
    )
}