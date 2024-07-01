import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";






export default function FaqBody() {
    const [activeQuestion, setActiveQuestion] = useState(null)

    const questions = [
        {
            id: 1,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days.",
        },
        {
            id: 2,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days.",
        },
        {
            id: 3,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days.",
        },
        {
            id: 4,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days.",
        },
        {
            id: 5,
            question: "How long is shipping?",
            answer: "Shipping is between 5-10 business days.",
        }
    ]

   


    return(
        <>
        {/** Accordion **/}
        <section className="mx-2 my-6 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div>
                    <div className="text-center">
                        <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">FEATURED QUESTION ANSWER</span>
                        <h2 className="h2 text-tertiary">Frequently Asked Question You <br/>Should Know</h2>
                    </div>
                    <div className="xl:py-0 xl:mt-10">
                        <div>
                            {questions.map((q) => (
                                <div key={q.id} className="mb-4 last:mb-0">
                                    <button className="w-full text-left h5 text-tertiary focus:outline-none p-4 bg-white rounded-[30px] shadow-custom8 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                                            {q.question}
                                            {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                    </button>
                                    <AnimatePresence>
                                        {activeQuestion === q.id &&
                                        (
                                            <motion.div initial={{opacity: 0, height: 0}}
                                            animate={{opacity: 1, height: "auto"}}
                                            exit={{opacity: 0, height: 0}}
                                            className="mt-2 text-gray-600 ml-4">
                                            <p className="p">{q.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Newsletter **/}
        <section className="section bg-[#f6f6f6] items-center relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[58px]">
                    <div className="flex-1 z-10 text-center md:text-left">
                        <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Our Newsletter</span>
                        <h1 className="h1 text-tertiary">Subscribe to get more updates</h1>
                    </div>
                    <form className="flex-1">
                        <div className="flex flex-col md:flex-row relative gap-y-4">
                            <input type="text" placeholder="Your email address" className="rounded-full w-full h-[66px] bg-transparent border-2 border-tertiary outline-none pl-[30px] placeholder:text-tertiary focus:text-tertiary" />
                            <button className="btn btn-lg btn-white md:absolute right-0 xl:mt-0.4">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}