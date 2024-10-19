import { useEffect, useRef, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import projectData from "../../../data/projects.json"

export default function Project() {
    const [lastBox, setLastBox] = useState(false)
    const [imagePopup, setImagePopup] = useState(false)
    const [id, setId] = useState(0)
    const scrollRef = useRef(null)
    const [scrollTimeout, setScrollTimeout] = useState(null); // State for timeout to prevent double taps
    const [showNextButton, setShowNextButton] = useState(false); // State for showing/hiding next button
    const [showPrevButton, setShowPrevButton] = useState(false);


    const entries = Object.values(projectData);
    const images = Object.values(entries[id].image); // Find the project by its id



    useEffect(() => {
        if (entries.length === 0) {
            setLastBox(true);
        } else {
            setLastBox(false);
        }
    }, [entries]);


    const margin = lastBox ?  "xl:m-0" : "xl:m-[5px]" 

    const handlePopup = (id) => {
        imagePopup ? setImagePopup(false) : setImagePopup(true) & setId(id);

    };

    const scroll = (direction) => {
        const scrollAmount = window.innerWidth;
        scrollRef.current.scrollBy({
            top: 0,
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        });
    };
    const handleScroll = (direction) => {
        if (scrollTimeout) return; // If there's already a timeout, do nothing
        scroll(direction); // Scroll in the specified direction
        setScrollTimeout(setTimeout(() => setScrollTimeout(null), 500)); // Set timeout to allow scrolling again after 300ms
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            if (scrollRef.current) {
                const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
                const isAtStart = scrollLeft === 0; // Check if at the start
                setShowNextButton(!isAtEnd); // Hide next button if at the end
                setShowPrevButton(!isAtStart); // Hide previous button if at the start
            }
        };

        if (imagePopup) {
            const refCurrent = scrollRef.current;
            setShowNextButton(false);
            setShowPrevButton(false);


            if(refCurrent.scrollWidth > window.innerWidth){
                setShowNextButton(true);
            }

            refCurrent.addEventListener("scroll", handleScrollEvent);

            return () => {
                refCurrent.removeEventListener("scroll", handleScrollEvent);
            };

        }

    }, [imagePopup]);

    return (
        <>
            {
                entries.map((data, index) => {
                    const [isHover, setHover] = useState(false);
                    const opacity = isHover ? "opacity-70" : "opacity-0";
                    return (
                        <div key={index} className={`inline-block h-[450px] w-svw xl:w-[590px] border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 ${margin}`}>
                            <div className="flex w-full h-full flex-col">
                                <div className="flex w-full h-[10%] items-center justify-center">
                                    <p className="text-xl font-semibold text-white [text-wrap:wrap]" >{data.name}</p>
                                </div>
                                <div className="flex w-full h-[85%] justify-center items-center flex-col">
                                    <div className="flex w-[90%] rounded-xl h-[400px] relative overflow-hidden justify-center items-center" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} onClick={() => { handlePopup(index) }}>
                                        <img src={data.image.img1} alt={data.image.img1} className="flex w-auto h-auto center" />
                                        <div className={`text-gray-400 text-sm absolute w-full rounded-xl h-full flex justify-center items-center bg-black ${opacity} duration-500`}>View all images</div>

                                    </div>
                                    <div className="flex w-[100%] h-full justify-center items-end">
                                        <div className="flex w-[90%] h-[95%] flex-col justify-between">
                                            <p className="[text-wrap:wrap] text-white text-md">{data.description}</p>
                                            <div className="w-full flex justify-end">
                                                <a href={data.link} target="_blank" className="text-white text-sm w-32 h-10 border rounded-md border-blue-600 hover:bg-black hover:bg-opacity-20 duration-200 flex justify-center items-center">View Project &#8594;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }
                )

            }
            {imagePopup && (<div onClick={handlePopup} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-40">
                {showPrevButton && (
                    <button onClick={(e) => { e.stopPropagation(); handleScroll("left") }} className="text-white left-1 xl:left-[4%] absolute text-[2rem] w-5 h-5 xl:w-20 xl:h-20 flex justify-center items-center">
                        <FaAngleLeft />
                    </button>
                )
                }

                <div className="w-full h-full flex justify-center items-center overflow-x-auto scrollbar-hide" ref={scrollRef}>
                    <div className="inline-block whitespace-nowrap">
                        {
                            images.map((data, id) => {
                                return (
                                    <div key={id} className="inline-block w-full h-full">
                                        <div className="flex w-full h-[auto] xl:h-[700px] justify-center items-center">
                                            <img
                                                onClick={(e) => { e.stopPropagation() }}
                                                src={data}
                                                alt="description" className="flex justify-center w-[auto] h-[80%] overflow-hidden"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div></div>

                {
                    showNextButton && (
                        <button onClick={(e) => { e.stopPropagation(); handleScroll("right") }} className="text-white right-1 xl:right-[4%] absolute text-[2rem] w-5 h-5 xl:w-20 xl:h-20 flex justify-center items-center">
                            <FaAngleRight />
                        </button>
                    )
                }

            </div>)}
        </>
    )
}