import { useEffect, useState } from "react";

export default function Percentage(props) {
    const [currentPerc, setCurrentPerc] = useState(0);

    useEffect(() => {
        // Reset currentPerc to 0 whenever props.perc changes
        setCurrentPerc(0);

        let start = 0;
        const interval = setInterval(() => {
            if (start < props.perc) {
                start += 1;
                setCurrentPerc(start);
            } else {
                clearInterval(interval);
            }
        },5 ); // Adjust speed by changing the interval duration

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [props.perc]);

    return (
        <div className="w-11/12 justify-between h-8 xl:h-11 flex flex-col mb-5">
            <div className="flex justify-between text-blue-400 font-bold">
                <p className="text-white text-sm xl:text-[1rem] font-semibold">{props.title}</p>
                <p className="text-sm xl:text-[1rem]">{currentPerc}%</p>
            </div>
            <div className="bg-black bg-opacity-30 w-full h-1.5 xl:h-2 rounded-xl">
                <div
                    className="bg-gradient-to-r from-blue-600 to-blue-700 h-1.5 xl:h-2 rounded-xl"
                    style={{ width: `${currentPerc}%`, transition: "width 0.5s ease" }}
                ></div>
            </div>
        </div>
    );
}
