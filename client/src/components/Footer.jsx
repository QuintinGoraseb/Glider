


export default function Footer() {


    return(
        <footer className="pt-8 sm:pt-12 xl-pt-[150px] bg-primary px-10">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                    <div className="flex-1">
                        <a className="flex justify-center lg:justify-start gap-2" href="">
                            <img className="size-11 mb-[20px]" src="/img/logo.png" alt="Logo" />
                            <span className="font-bold text-2xl text-black">GLIDER</span>
                        </a>
                        <p className="-mb-[15px] lg:mb-[20px] text-justify">
                            Glider Human Capital Business Consultants are a boutique human resource consultancy agency that specializes in strategic HR consulting, Talent Aquisition and Management, and HR Outsourcing services.
                        </p>
                        <div className="hidden sm:flex flex-col gap-y-3 mb-4">
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-map-pin-fill text-[18px]"></i>
                                <div>830 Samuel Maharero street, Windhoek, Namibia</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-mail-fill text-[18px]"></i>
                                <div>info@glider.com.na</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-phone-fill text-[18px]"></i>
                                <div>(+264) 000 000</div>
                            </div>
                        </div>
                        <div className="hidden sm:flex gap-[14px] text-[23px]">
                            <div className="p-[2px] rounded-[10px] shadow-custom2 cursor-pointer transition-all ease-in-out hover:scale-110">
                                <a className="" href="">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </div>
                            <div className="p-[2px] rounded-[10px] shadow-custom2 cursor-pointer transition-all ease-in-out hover:scale-110">
                                <a className="" href="">
                                    <i className="ri-facebook-circle-fill"></i>
                                </a>
                            </div>
                            <div className="p-[2px] rounded-[10px] shadow-custom2 cursor-pointer transition-all ease-in-out hover:scale-110">
                                <a className="" href="">
                                    <i className="ri-linkedin-box-fill"></i>
                                </a>
                            </div>
                            <div className="p-[2px] rounded-[10px] shadow-custom2 cursor-pointer transition-all ease-in-out hover:scale-110">
                                <a className="" href="">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block flex-1 ml-10">
                        <h4 className="h-4 mb-5 font-bold">QUICK LINKS - SITE POLICY</h4>
                        <div className="flex gap-x-5">
                            <ul className="flex-1 flex flex-col gap-y-4">
                                <li><a href="/home" className="hover:text-[#c0c0c0] pr-4 transition-all" >Home</a></li>
                                <li><a href="/about" className="hover:text-[#c0c0c0] pr-4 transition-all">About</a></li>
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all">Services</a></li>
                                <li><a href="/btools" className="hover:text-[#c0c0c0] pr-4 transition-all">Business Tools</a></li>
                                <li><a href="/faq" className="hover:text-[#c0c0c0] pr-4 transition-all">FAQ</a></li>
                                <li><a href="/contact" className="hover:text-[#c0c0c0] transition-all">Contact</a></li>
                                <li><a href="/terms" className="hover:text-[#c0c0c0] transition-all">Terms of Use</a></li>
                                <li><a href="/privacy" className="hover:text-[#c0c0c0] transition-all">Privacy Policy</a></li>
                            </ul>
                            <ul className="flex-1 flex flex-col gap-y-4">
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all" >Business Consulting & Outsourcing</a></li>
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all">Human Resource Infrastructure</a></li>
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all">Compensation & Payroll Outsourcing</a></li>
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all">Learning & Development Services</a></li>
                                <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 transition-all">Labour Relations Consulting</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center lg:mb-[10px] block flex-1">
                        <h4 className="lg:text-left h-4 mb-5 font-bold">OPERATING HOURS</h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex-1">
                                <div className="lg:flex justify-between items-center border-b pb-[10px]">
                                    <div>Monday - Friday</div>
                                    <div className="font-medium">8:00 AM - 5:00 PM</div>
                                </div>
                                <div className="lg:flex justify-between items-center border-b py-[10px]">
                                    <div>Saturday</div>
                                    <div className="font-medium">9:00 AM - 1:00 PM</div>
                                </div>
                                <div className="lg:flex justify-between items-center border-b py-[10px]">
                                    <div>Sundays - Public Holidays</div>
                                    <div className="font-medium">Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr
            className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-25 dark:opacity-100 z-10"/>
            <div>
                <div className="container mx-auto text-center">
                    <div className="text-base pb-5">
                        Copyright &copy; Glider {new Date().getFullYear()}. All Rights Reserved | Developed by: <a className="font-[playfair] hover:text-[#c0c0c0]" href="/">SOFTLogiQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}