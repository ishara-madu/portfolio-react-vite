export default function SkillBox(props) {

    const bg = props.bgcolor == true ? "bg-opacity-0" : "bg-opacity-100"
    return (
        <>
            <div className={`flex flex-wrap border xl:border-2 w-40 xl:w-60 h-14 xl:h-24 rounded-lg border-blue-600 justify-center items-center bg-gradient-to-b from-blue-500 to-blue-700 relative overflow-hide cursor-pointer`}>
                <div className={`flex w-full h-full justify-center items-center rounded-lg bg-[#0b1d45] ${bg} duration-300`}>
                <div onClick={(e) => { e.stopPropagation() }} className="xl:w-14 xl:h-14 w-9 h-9 bg-blue-950 border-blue-600 border xl:border-2 absolute rounded-md flex justify-center items-center cursor-default" style={{ left: "-15px", top: "-15px" }}>
                    <props.icon className='w-3/5 h-3/5 text-blue-600' />
                </div>
                <p className="text-md xl:text-xl font-semibold text-white">{props.title}</p>
</div>
            </div>
        </>
    )
}