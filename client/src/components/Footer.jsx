


export default function Footer() {


    return(
        <footer className="FooterSection bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                    <div className="flex-1">
                        <a className="flex justify-center lg:justify-start gap-2 py-2" href="">
                            <img className="size-11 mb-[20px]" src="/img/logo.png" alt="Logo" />
                            <span className="font-bold text-2xl text-[roboto slap] text-black">GLIDER</span>
                        </a>
                        <p className="h6 -mb-[15px] lg:mb-[20px] text-justify">
                            Glider Human Capital Business Consultants are a boutique human resource consultancy agency that specializes in strategic HR consulting, Talent Aquisition and Management, and HR Outsourcing services.
                        </p>
                        <div className="hidden sm:flex flex-col gap-y-3 mb-4">
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-map-pin-fill text-[18px]"></i>
                                <div className="h6">830 Samuel Maharero street, Windhoek, Namibia</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-mail-fill text-[18px]"></i>
                                <div className="h6">info@glider.com.na</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-phone-fill text-[18px]"></i>
                                <div className="h6">(+264) 000 000</div>
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
                        <h5 className="h5">QUICK LINKS - SITE POLICY</h5>
                        <div className="flex gap-x-5">
                            <ul className="flex-1 flex flex-col gap-y-4">
                                <li><a href="/home" className="h6 hover:text-[#c0c0c0] pr-4 transition-all" >Home</a></li>
                                <li><a href="/about" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">About</a></li>
                                <li><a href="/services" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">Services</a></li>
                                <li><a href="/btools" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">Business Tools</a></li>
                                <li><a href="/faq" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">FAQ</a></li>
                                <li><a href="/contact" className="h6 hover:text-[#c0c0c0] transition-all">Contact</a></li>
                            </ul>
                            <ul className="flex-1 flex flex-col gap-y-4">
                                <li><a href="/disclaimer" className="h6 hover:text-[#c0c0c0] pr-4 transition-all" >Disclaimer</a></li>
                                <li><a href="/gdpr" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">GDPR</a></li>
                                <li><a href="/error" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">404</a></li>
                                <li><a href="/cookies" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">Cookies Usage</a></li>
                                <li><a href="/privacy" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">Privacy Policy</a></li>
                                <li><a href="/terms" className="h6 hover:text-[#c0c0c0] pr-4 transition-all">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center lg:mb-[10px] block flex-1">
                        <h5 className="lg:text-left h5">OPERATING HOURS</h5>
                        <div className="flex flex-col gap-5">
                            <div className="flex-1">
                                <div className="h6 lg:flex justify-between items-center border-b pb-[10px]">
                                    <div>Monday - Friday</div>
                                    <div className="font-medium">8:00 AM - 5:00 PM</div>
                                </div>
                                <div className="h6 lg:flex justify-between items-center border-b py-[10px]">
                                    <div>Saturday</div>
                                    <div className="font-medium">9:00 AM - 1:00 PM</div>
                                </div>
                                <div className="h6 lg:flex justify-between items-center border-b py-[10px]">
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
                    <div className="h6 text-base">
                        Copyright &copy; Glider {new Date().getFullYear()}. All Rights Reserved | Developed by: <a className="font-[playfair] hover:text-[#c0c0c0]" href="/">SOFTLogiQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}