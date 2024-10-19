
import ContactLeft from "./contents/ContactLeft";
import ContactRight from "./contents/ContactRight";
import contactData from "../../data/contact.json"


export default function Hero() {
    return (
        <>
            <div className="flex w-full h-full flex-col justify-center relative">
                <div className="flex w-full h-full flex-col justify-start gap-10 mb-20 xl:m-0">
                    <div className="w-full h-auto flex">
                        <div className="w-full xl:w-2/4 h-auto justify-center xl:justify-center flex">
                            <div className="w-3/4 h-auto justify-start xl:justify-start flex">
                                <h2 className="text-white font-semibold text-2xl">Contact Me</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-10 flex-col xl:flex-row">

                        <ContactLeft />
                        <ContactRight />

                    </div>
                </div>
                <div className="w-full flex justify-center h-10 bg-gradient-to-b from-blue-500 to-blue-700 self-end absolute bottom-0 items-center text-xs text-white"><p>ⓒ {contactData.copyright}</p></div>
            </div>


        </>
    )
}