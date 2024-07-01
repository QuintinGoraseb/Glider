


export default function IndexBody() {
    return(
        <>
        {/** Information Bar **/}
        <section className="mx-2 my-4 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="bg-[#ffff] shadow-custom8 p-6  max-w-[1466px] w-full rounded-[30px] relative xl:flex xl:mt-[-165px] gap-3 xl:z-30">
                    <div className="mb-6 xl:mb-0">
                        <div className="block rounded-[30px] bg-white p-6 shadow-custom4 dark:bg-neutral-700">
                                <h5 className="h5 py-0 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="p text-justify mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the cards content.
                                </p>
                        </div>
                    </div>
                    <div className="mb-6 xl:mb-0">
                        <div className="block rounded-[30px] bg-white p-6 shadow-custom4 dark:bg-neutral-700">
                                <h5 className="h5 py-0 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="p text-justify mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the cards content.
                                </p>
                        </div>
                     </div>
                    <div className="">
                        <div className="block rounded-[30px] bg-white p-6 shadow-custom4 dark:bg-neutral-700">
                            <h5 className="h5 py-0 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Card title
                            </h5>
                            <p className="p text-justify mb-4">
                                Some quick example text to build on the card title and make up the bulk of the cards content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** About Us Intro **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="flex flex-1 flex-col xl:flex-row">
                        <div className="pb-6 xl:pb-0 xl:pr-6">
                            <div className="p-6 xl:pb-6">
                                <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1713526721814-412688ede906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwN3xhZXU2ckwtajZld3x8ZW58MHx8fHx8" alt="" />
                            </div>
                            <div className="bg-tertiary rounded-[30px] text-white p-6">
                                <h5 className="h5 pb-2">Your External HR Department</h5>
                                <p className="p">We not only provide consultation but also<br/> we offer flexible, realistic, and cost-effective human resources support for individuals and businesses.</p>
                            </div>
                        </div>
                        <div className="pb-8 xl:pr-11">
                            <div className="pb-6 xl:mt-[-25px]">
                                <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1586853324836-b70ab9b68c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0M3xhZXU2ckwtajZld3x8ZW58MHx8fHx8" alt="" />
                            </div>
                            <div className="">
                                <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1569021998480-a68f22f6ba86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXxhZXU2ckwtajZld3x8ZW58MHx8fHx8" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="xl:max-w-[655px]">
                        <div className="pb-6">
                            <div className="">
                                <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">
                                    Welcome
                                </span>
                                <h2 className="h2 font-[whyte] text-tertiary">
                                    A brief background on how we got started.
                                </h2>
                                <p className="p pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque tempore repellat molestiae dolorem fuga, amet neque. Vero, est quasi!</p>
                            </div>
                            <button className="learnbtn p-8 items-center mb-2 xl:mx-0 text-tertiary bg-white shadow-custom8"><a href="/about">Explore More</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <img className="rounded-[30px]" src="/img/banner.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Our Services Intro **/}
        <section className="mx-2 my-8 xl:my-0 xl:section bg-[#f6f6f6]">
            <div className="container mx-auto">
                <div className="pt-6 sm:pt-0 text-center">
                <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Our Services</span>
                <h2 className="h2 font-[whyte] text-tertiary">Explore our service portfolio and learn more about what we do</h2>
                </div>
                <div className="flex flex-1 flex-col xl:items-center xl:flex-row">
                    <div className="max-w-[455px] py-6 xl:pr-6">
                        <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1713526715535-43f5cc19e617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                    <div>
                        <div className="flex flex-1 flex-col xl:flex-row xl:mb-6 ">
                            <div className="mb-6 xl:mb-0 xl:mr-6">
                                <div className="block rounded-[30px] bg-[#f6f6f6] p-6 shadow-custom8">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">
                                        HR Consulting and Outsourcing
                                    </h5>
                                    <p className="p text-justify mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the cards content.
                                    </p>
                                    <div>
                                        <button className="learnbtn items-center text-tertiary shadow-custom4"><a href="/services">Learn More</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 xl:mb-0">
                                <div className="block rounded-[30px] bg-[#f6f6f6] p-6 shadow-custom8">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">
                                        Compensation and Payroll Outsourcing
                                    </h5>
                                    <p className="p text-justify mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the cards content.
                                    </p>
                                    <div>
                                        <button className="learnbtn items-center text-tertiary shadow-custom4"><a href="/services">Learn More</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col xl:flex-row">
                            <div className="mb-6 xl:mb-0 xl:mr-6">
                                <div className="block rounded-[30px] bg-[#f6f6f6] p-6 shadow-custom8">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">
                                        Labour Relations Consulting
                                    </h5>
                                    <p className="p text-justify mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the cards content.
                                    </p>
                                    <div>
                                        <button className="learnbtn items-center text-tertiary shadow-custom4"><a href="/services">Learn More</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 xl:mb-0">
                                <div className="block rounded-[30px] bg-[#f6f6f6] p-6 shadow-custom8">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">
                                        Learning and Development Services
                                    </h5>
                                    <p className="p text-justify mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the cards content.
                                    </p>
                                    <div>
                                        <button className="learnbtn items-center text-tertiary shadow-custom4"><a href="/services">Learn More</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Great Services Intro **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="pt-0 sm:pt-0 xl:mt-20">
                        <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Great Service</span>
                        <h2 className="h2 font-[whyte] text-tertiary py-4 max-w-[582px]">We Are Professionals Since 15 Years Experience</h2>
                        <div className="py-6 max-w-[1102px]">
                            <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1713526730787-5b9b2b6cc66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col xl:flex-row">
                        <div className="max-w-[1102px]">
                            <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1713526553076-ee6322b5a70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="" />
                        </div>
                        <div className="mt-6 xl:mt-0 xl:max-w-[402px] xl:mt-10 xl:pl-10">
                            <img className="rounded-[30px]" src="https://images.unsplash.com/photo-1713526547570-0b904ac4aebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
                            <h3 className="h3 text-tertiary pt-6">Good Talent Services</h3>
                            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est ab perferendis expedita inventore sint nam quasi voluptate culpa incidunt!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Why Choose Us **/}
        <section className="mx-2 my-8 xl:my-0 xl:section bg-[#f6f6f6]">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="py-6 xl:pr-20">
                        <img className="rounded-[30px] xl:max-w-[455px]" src="https://images.unsplash.com/photo-1687620432217-d2c93783948a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                    <div className="">
                        <div className=" xl:mt-[58px]">
                            <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Why Choose Us</span>
                            <h2 className="h2 font-[whyte] text-tertiary py-4">What sets us apart from the rest</h2>
                            <div className="pb-10">
                                <button className="learnbtn p-8 items-center xl:mx-0 text-tertiary bg-[#f6f6f6] shadow-custom8"><a      href="/about">Explore More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                    <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col xl:flex-row">
                            <div className="">
                                <div className="mb-6 sm:mb-6 p-6 bg-[#f6f6f6] rounded-[30px] shadow-custom8 flex flex-col transform transition xl:mr-6">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">Quality</h5>
                                    <p className="p max-w-[300px]">We have a great team who works hard and rigorously to grow your business beyond expectations.</p>
                                </div>
                                <div className="mb-6 sm:mb-6 p-6 bg-[#f6f6f6] rounded-[30px] shadow-custom8 flex flex-col transform transition xl:mr-6">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">Customization</h5>
                                    <p className="p max-w-[300px]">We listen to our clients objectives and aspirations and therefore provide customize solutions.</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-6 sm:mb-6 p-6 bg-[#f6f6f6] rounded-[30px] shadow-custom8 flex flex-col transform transition">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">Expert Advicers</h5>
                                    <p className="p max-w-[300px]">We are innovative and passionate about the work we do. We always come up with new ways to enrich our clients.</p>
                                </div>
                                    <div className="mb-6 sm:mb-6 p-6 bg-[#f6f6f6] rounded-[30px] shadow-custom8 flex flex-col transform transition">
                                    <h5 className="h5 mb-2 py-0 text-xl font-medium leading-tight text-tertiary dark:text-neutral-50">On Time Service</h5>
                                    <p className="p max-w-[300px]">We genuinely understand the value of time in business and hence adhere to time and deliver all services on time to our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Our Resources Intro **/}
        <section className="mx-2 my-8 xl:my-0 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row items-center justify-between">
                    <div className="">
                        <span className="font-[oswald] font-meduim leading-normal text-[#cdb99f] uppercase">Our Resources</span>
                        <h2 className="h2 text-tertiary py-4">Discover & Make Use Of Our Resource</h2>
                    </div>
                    <div className="max-w-[582px]">
                        <p className="p text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptates illo ipsa adipisci sapiente debitis accusamus enim sint, rerum tempore praesentium? Quia, ratione reiciendis. Quo praesentium veniam voluptas. Ipsa, perspiciatis.</p>
                        <div className="py-4">
                            <button className="learnbtn p-8 items-center xl:mx-0 text-tertiary bg-white shadow-custom8"><a href="/about">Explore More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col xl:flex-row justify-between gap-6 pt-6">
                    <div className="block rounded-[30px] bg-tertiary shadow-custom1">
                        <img className="rounded-[30px]"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <div className="p-10">
                            <h3 className="h3 text-white">Graduate Hub</h3>
                            <p className="text-white text-justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla exercitationem tempora voluptatem sit cumque mollitia sint illum nemo at minus cupiditate qui, saepe placeat id consectetur! Ut tempore distinctio recusandae?
                            </p>
                            <button className="learnbtn items-center text-tertiary"><a      href="services">Learn More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="block rounded-[30px] bg-tertiary">
                        <img className="rounded-[30px]"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <div className="p-10">
                            <h3 className="h3 text-white">Diaspora Bank</h3>
                            <p className="text-white text-justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla exercitationem tempora voluptatem sit cumque mollitia sint illum nemo at minus cupiditate qui, saepe placeat id consectetur! Ut tempore distinctio recusandae?
                            </p>
                            <button className="learnbtn items-center text-tertiary"><a      href="services">Learn More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="block rounded-[30px] bg-tertiary">
                        <img className="rounded-[30px]"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <div className="p-10">
                            <h3 className="h3 text-white">Corporate Expate Support Services</h3>
                            <p className="text-white text-justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla exercitationem tempora voluptatem sit cumque mollitia sint illum nemo at minus cupiditate qui, saepe placeat id consectetur! Ut tempore distinctio recusandae?
                            </p>
                            <button className="learnbtn items-center text-tertiary"><a      href="services">Learn More</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/** Call To Action **/}
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