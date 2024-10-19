import { useState, useRef, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Project from "./pejects-list/project";

export default function Hero() {
    const scrollRef = useRef(null); // Reference to the scrollable container
    const [showNextButton, setShowNextButton] = useState(false); // State for showing/hiding next button
    const [showPrevButton, setShowPrevButton] = useState(false); // State for showing/hiding previous button
    const [scrollTimeout, setScrollTimeout] = useState(null); // State for timeout to prevent double taps
    const [screenWidth,setScreenWidth] = useState(0);



    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = screenWidth; // Adjust this value to change the scroll distance
            scrollRef.current.scrollBy({
                top: 0,
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth", // Smooth scrolling effect
            });
        }
    };

    const handleScroll = (direction) => {
        if (scrollTimeout) return; // If there's already a timeout, do nothing
        scroll(direction); // Scroll in the specified direction
        setScrollTimeout(setTimeout(() => setScrollTimeout(null), 500)); // Set timeout to allow scrolling again after 300ms
    };

    // Effect to check if there are more images to scroll to
    useEffect(() => {
        if (window.innerWidth >= 1280) {
            setScreenWidth(600);
        }else{
            setScreenWidth(window.innerWidth);
        }
        const handleScrollEvent = () => {
            if (scrollRef.current) {
                const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
                const isAtStart = scrollLeft === 0; // Check if at the start
                setShowNextButton(!isAtEnd); // Hide next button if at the end
                setShowPrevButton(!isAtStart); // Hide previous button if at the start
            }
        };

        const refCurrent = scrollRef.current;
        refCurrent.addEventListener("scroll", handleScrollEvent);
        const {scrollWidth} = refCurrent;
        if(scrollWidth > window.innerWidth){
            setShowNextButton(true);
        }
        return () => {
            refCurrent.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col relative">
                <div className="flex w-full h-full justify-center items-center gap-10 flex-col">
                    <div className="w-full h-auto flex">
                        <div className="w-full xl:w-2/4 h-auto justify-center xl:justify-center flex">
                            <div className="w-3/4 h-auto justify-start xl:justify-start flex">
                                <h2 className="text-white font-semibold text-2xl">Completed Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        {showPrevButton && ( // Conditionally render the previous button
                            <button
                                onClick={() => handleScroll("left")}
                                className="absolute left-2 xl:left-14 border xl:border-2 border-blue-600 w-11 h-11 rounded-xl flex justify-center items-center text-blue-600 text-2xl bg-black bg-opacity-30 z-10"
                            >
                                <FaAngleLeft />
                            </button>
                        )}
                        <div ref={scrollRef} className="w-full xl:w-10/12 h-auto overflow-x-auto scrollbar-hide">
                            <div className="inline-block whitespace-nowrap">
                                <Project />
                            </div>
                        </div>
                        {showNextButton && ( // Conditionally render the next button
                            <button
                                onClick={() => handleScroll("right")}
                                className="absolute right-2 xl:right-14 border xl:border-2 border-blue-600 w-11 h-11 rounded-xl flex justify-center items-center text-blue-600 text-2xl bg-black bg-opacity-30"
                            >
                                <FaAngleRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
