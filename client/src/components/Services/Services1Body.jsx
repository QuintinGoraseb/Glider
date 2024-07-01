import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";



export default function Services1Body() {
    const [activeQuestion, setActiveQuestion] = useState(null)

    const questions = [
        {
            id: 1,
            question: "Holistic HR Consulting (Onsite & Offsite)",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 2,
            question: "Corporate Health, Safety and Environment Consulting",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 3,
            question: "Performance Management",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 4,
            question: "Job Profiling",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 5,
            question: "HR Policy Drafting",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question = [
        {
            id: 6,
            question: "Remuneration Survey Facilitation",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 7,
            question: "Human Resource Information systems (HRIS)",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 8,
            question: "Electronic Document storage",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 9,
            question: "HR Audits",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question1 = [
        {
            id: 10,
            question: "Full Payroll Outsourcing (Including Statutory Compliance Support)",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 11,
            question: "Benefit Administration",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 12,
            question: "Affirmative Action Reporting",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question2 = [
        {
            id: 13,
            question: "Training",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 14,
            question: "Caoching/Mentoring Facilitation",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 15,
            question: "Assessments",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question6 = [
        {
            id: 23,
            question: "Labour/Industrial Advisory Services (Corporates & Individual)",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 24,
            question: "Chairing of Disciplinary Hearings & Preparation for Labour Dispute Hearings",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 25,
            question: "Labour/Industrial Relations Related Training",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question3 = [
        {
            id: 16,
            question: "Design, Implementation & Facilitation of Corporate Graduate Integrated Programes",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 17,
            question: "Online Graduate Database",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 18,
            question: "Graduate Advisory Services & Support",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question4 = [
        {
            id: 19,
            question: "Online Diaspora Database",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 20,
            question: "Diaspora Placement Services & Support",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]

    const question5 = [
        {
            id: 21,
            question: "Immigration Services Support",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
        {
            id: 22,
            question: "Relocation & Logistics Support",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.",
        },
    ]





    return(
        <>
        {/** HR Consulting & Outsourcing **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="">
                    <img className="xl:object-cover xl:h-[395px] w-full rounded-[30px]" src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="flex flex-1 flex-col xl:flex-row mt-6 xl:mt-10 xl:gap-10    ">
                    <div className="xl:w-1/2">
                        <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                        <h2 className="h2 font-[whyte] text-tertiary">
                        HR Consulting & Outsourcing
                        </h2>
                    </div>
                    <div className="xl:w-1/2">
                        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col xl:flex-row xl:gap-10 mt-6 xl:mt-10">
                    <div className="xl:w-1/2">
                        {questions.map((q) => (
                            <div key={q.id} className="mb-3 last:mb-0">
                                <button className="w-full text-left h5 text-tertiary focus:outline-none p-2 bg-white rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
                    <div className="xl:w-1/2 mt-2 xl:mt-0">
                        {question.map((q) => (
                            <div key={q.id} className="mb-3 last:mb-0">
                                <button className="w-full text-left h5 text-tertiary focus:outline-none p-2 bg-white rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
        </section>
        {/** Compensation & Payroll Outsourcing **/}
        <section className="mx-2 my-8 xl:my-0 xl:section bg-[#f6f6f6]">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row items-center xl:gap-10">
                    <div className="mt-6 xl:mb-0 xl:w-1/2">
                        <img className="rounded-[30px]" src="https://media.istockphoto.com/id/1457878227/photo/business-people-having-a-meeting-in-a-tech-company.jpg?s=612x612&w=0&k=20&c=G15Z82qB7v1BVzqZ9eu_wrnDQPrxUEatXyb_TGKdu_s=" alt="" />
                    </div>
                    <div className="xl:w-1/2">
                        <div className="mt-6 xl:mt-0">
                            <div className="">
                                <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                                <h2 className="h2 font-[whyte] text-tertiary">
                                    Compensation and Payroll Outsourcing
                                </h2>
                            </div>
                            <div className="">
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            </div>
                        </div>
                        <div className="mb-6 xl:mb-0 xl:mt-10">
                            {question1.map((q) => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <button className="w-full text-left h5 text-tertiary focus:outline-none p-2 bg-[#f6f6f6] rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
        {/** Labour Relations Consulting **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="xl:mr-10 xl:mt-[100px]">
                        <div>
                            <div className="">
                                <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                                <h2 className="h2 font-[whyte] text-tertiary">
                                    Labour Relations Consulting
                                </h2>
                            </div>
                            <div className="">
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div className="my-6 xl:mt-10">
                                {question2.map((q) => (
                                    <div key={q.id} className="mb-3 last:mb-0">
                                        <button className="w-full text-left h5 text-tertiary focus:outline-none p-2 bg-white rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
                    <div className="">
                        <div className="mb-6">
                            <img className="rounded-[30px] object-cover" src="https://media.istockphoto.com/id/1424987910/photo/coworkers-with-stacked-hands-at-the-office.jpg?s=612x612&w=0&k=20&c=VRcFD0Im7myc70YBar1YLBSPL-CtYzenVyd4XRhloQ8=" alt="" />
                        </div>
                        <div className="">
                            <img className="rounded-[30px]" src="https://media.istockphoto.com/id/649346048/photo/working-through-some-concepts.jpg?s=612x612&w=0&k=20&c=O2mmiNfF6KjO6I3UaYmcm1itiRk_40X6HC-vpaSTQSY=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Learning & Development Services **/}
        <section className="mx-2 my-8 xl:my-0 xl:section bg-[#f6f6f6]">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="xl:w-1/2">
                        <div className="mt-6 xl:mt-0">
                            <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                            <h2 className="h2 font-[whyte] text-[#31496b]">Learning & Development Services
                            </h2>
                        </div>
                        <div className="mb-6 xl:mb-0">
                            <img className="rounded-[30px] border-r-[10px]  border-r-[#cdb99f]" src="https://media.istockphoto.com/id/1278858409/photo/young-creative-business-people-meeting-at-office.jpg?s=612x612&w=0&k=20&c=6NKgZ_PmhvgajpSdNQ7ocFGdhGZhZdXQ3rHIclR6tjA=" alt="" />
                        </div>
                    </div>
                    <div className="xl:w-1/2">
                        <div className="xl:flex justify-center items-center">
                            <img className="rounded-[30px] border-l-[10px]  border-l-[#cdb99f]" src="https://media.istockphoto.com/id/1344872631/photo/portrait-of-a-group-of-confident-young-businesspeople-working-together-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=_MdFKendqK0sN48ukiTmxPzP5GsoDn_E5Lo7RH6wFuU=" alt="" />
                        </div>
                        <div className="my-6 xl:my-0 xl:mt-10">
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                        </div>
                        <div className="mb-6 xl:mb-0 xl:mt-10">
                            {question6.map((q) => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <button className="w-full text-left h5 text-[#31496b] focus:outline-none p-2 bg-[#f6f6f6] rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
        {/** Graduate Hub & Diaspora Bank **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row xl:gap-6">
                    <div className="xl:mt-0">
                        <div className="">
                            <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                            <h2 className="h2 font-[whyte] text-[#31496b]">
                                Graduate Hub
                            </h2>
                        </div>
                        <div className="">
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                        </div>
                        <div className="my-6 xl:my-0 xl:mt-10">
                            {question3.map((q) => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <button className="w-full text-left h5 text-[#31496b] focus:outline-none p-2 bg-white rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
                    <div className="oblect-cover xl:w-1/2">
                        <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1531346591156-12d1bffba268?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                        <div className="mt-6 xl:mt-0">
                            <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                            <h2 className="h2 font-[whyte] text-[#31496b]">
                                Diaspora Bank
                            </h2>
                        </div>
                        <div className="">
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                        </div>
                        <div className="xl:my-0 xl:mt-10">
                            {question4.map((q) => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <button className="w-full text-left h5 text-[#31496b] focus:outline-none p-2 bg-white rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
        {/** Corporate Expat Support Services **/}
        <section className="mx-2 my-8 xl:my-0 xl:section bg-[#f6f6f6]">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row items-center">
                    <div className="flex xl:w-1/2 my-6 xl:my-0">
                        <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1531346591156-12d1bffba268?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="xl:mt-0 xl:mx-6">
                        <div className="">
                            <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Brief Introduction</span>
                            <h2 className="h2 font-[whyte] text-tertiary">
                                Corporate Expat Support Services
                            </h2>
                        </div>
                        <div className="">
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis molestiae voluptates velit itaque ea accusamus, quo deserunt minus. Aspernatur.</p>
                        </div>
                        <div className="my-6 xl:mt-10">
                            {question5.map((q) => (
                                <div key={q.id} className="mb-3 last:mb-0">
                                    <button className="w-full text-left h5 text-tertiary focus:outline-none p-2 bg-[#f6f6f6] rounded-[30px] shadow-custom4 flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
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
                    <div className="flex xl:w-1/2 mb-6 xl:mb-0">
                        <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1531346591156-12d1bffba268?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
        </section>
        {/** Cta **/}
        <section className="cta bg-cta backdrop-filter backdrop-brightness-75">
            <div className="container mx-auto">
                <img src="" alt="" />
                <div className="text-center">
                    <h4 className="h4 text-white">Need more information?</h4>
                    <p className="text-white"> Do not sit around with unansweared questions, get in touch and receive more clarity on every aspect of our business.</p>
                    <a className="cta-btn" href="/contact">Contact Us Now</a>
                </div>

            </div>
        </section>
        </>
    );
}