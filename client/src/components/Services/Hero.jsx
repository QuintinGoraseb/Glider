import { ScrollReveal } from "react"




export default function Hero(){

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: '3000',
        delay: '600',
    });

    sr.reveal('.hero__text', { origin: 'top' });

    return(
        <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
            {/*** Hero Section ***/}
            <div className="banner h-[495px] sm:h-screen xl:h-[495px] bg-banner bg-center bg-cover bg-no-repeat bg-fixed relative z-20">
                <div className="container max-auto h-full flex items-center justify-center">
                    <div className="top-[40%] w-full text-[#f6f6f6] text-center xl:text-left p-4 mt-52">
                        <h1 className="font-[lato] font-extrabold text-4xl md:text-6xl drop-shadow-2xl"><span className="text-[#c0c0c0]">OUR</span> SERVICES</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}