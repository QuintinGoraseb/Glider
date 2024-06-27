



export default function ContactBody() {
    return(
        <>
         {/** Contact Form **/}
         <section className="mx-2 my-6 xl:section">
            <div className="container mx-auto">
                <div className="flex flex-1 flex-col xl:flex-row">
                    <div className="xl:mt-[95px]">
                        <span className="font-meduim leading-normal text-primary uppercase">Stay Tuned</span>
                        <h2 className="h2 font-[lato] text-tertiary py-4 ">Stay Tuned & Get In Touch With Us</h2>
                        <p className="font-light leading-normal pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque tempore repellat molestiae dolorem fuga, amet neque. Vero, est quasi!</p>
                        <div className="block rounded-[30px] bg-[#ffff]">
                            <div className="xl:flex">
                                <div className="mb-2 xl:mb-0 xl:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-tertiary">
                                    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div>
                                    <h5 className="h5 text-tertiary pb-2">
                                        Head Office Address
                                    </h5>
                                    <p className="p text-primary text-justify">
                                        Lumbung Hidup St. 425 East Java Madiun City 10000
                                    </p>
                                </div>
                            </div>
                            <div className="xl:flex mt-4">
                                <div className="mb-2 xl:mb-0 xl:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-tertiary">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                </div>
                                <div>
                                    <h5 className="h5 text-tertiary pb-2">
                                        Email Address</h5>
                                    <p className="p text-primary text-justify">
                                        info@glider.com.na
                                    </p>
                                </div>
                            </div>
                            <div className="xl:flex mt-4">
                                <div className="my-2 xl:my-0 xl:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 fill-tertiary">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div>
                                    <h5 className="h5 text-tertiary pb-2">Telephone</h5>
                                    <p className="p text-primary text-justify">
                                        +62 123 456 789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 xl:mt-0 bg-[#f6f6f6] rounded-[30px] p-10 xl:ml-10">
                        <h3 className="h3 text-primary pb-4">Send Us A Message</h3>
                        <p className="p pb-8 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus ipsa illum architecto vitae tempora, accusantium facere sapiente dolorem.
                        </p>
                        <form action="">
                            <div className="xl:flex items-center justify-between">
                                <div className="xl:w-[280px] mb-4">
                                    <label className="block h5 mb-2 text-primary" htmlFor="First Name">First Name</label>
                                    <input placeholder="First Name" className="w-full px-3 py-2 rounded-[30px] bg-white focus:border-white" required type="text" />
                                </div>
                                <div className="xl:w-[280px] mb-4">
                                    <label className="block h5 mb-2 text-primary" htmlFor="Last Name">Last Name</label>
                                    <input placeholder="Last Name" className="w-full px-3 py-2 rounded-[30px] bg-white focus:border-white" required type="text" />
                                </div>
                            </div>
                            <div className="xl:flex items-center justify-between">
                                <div className="xl:w-[280px] mb-4">
                                    <label className="block h5 mb-2 text-primary" htmlFor="Email">Email</label>
                                    <input placeholder="Email" className="w-full px-3 py-2 rounded-[30px] bg-white focus:border-white" required type="email" />
                                </div>
                                <div className="xl:w-[280px] mb-4">
                                    <label className="block h5 mb-2 text-primary" htmlFor="Subject">Subject</label>
                                    <input placeholder="Subject" className="w-full px-3 py-2 rounded-[30px] bg-white focus:border-white" required type="text" />
                                </div>
                            </div>
                            <div className="mb-4">
                            <label className="block h5 mb-2 text-primary" htmlFor="">Message</label>
                                <textarea rows='4' placeholder="Message" className="w-full px-3 py-4 rounded-[30px] bg-white focus:border-white" name="" id=""></textarea>
                            </div>
                            <p className="p py-4 text-justify">By submitting this form you agree to our <span className="text-blue-700 hover:underline cursor-pointer"><a href="/terms">terms and conditions</a></span> and our <span className="text-blue-700 hover:underline cursor-pointer"><a href="/privacy">privacy policy</a></span> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                            <button className="learnbtn p-8 items-center xl:mx-0 text-primary bg-white"><a      href="/about">Send Message</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                                <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
         </section>
         {/** Newsletter **/}
         <section className="section bg-[#f6f6f6] md:h-[444px] py-12 flex items-center relative overflow-hidden px-20">
            <div className="newsletter__container container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[58px]">
                    <div className="flex-1 z-10 text-center md:text-left">
                        <span className="font-meduim leading-normal text-primary uppercase">Our Newsletter</span>
                        <h1 className="h1 mb-4 text-tertiary">Subscribe to get more updates</h1>
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