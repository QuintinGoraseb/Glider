




export default function THero(){
    return(
        <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
            {/*** Hero Section ***/}
            <div className="banner h-[455px] sm:h-screen xl:h-[455px] bg-banner bg-center bg-cover bg-no-repeat bg-fixed relative z-20">
                <div className="container max-auto h-full flex items-center justify-center">
                    <div className="xl:flex xl:px-6 justify-between items-center top-[40%] w-full text-[#f6f6f6] text-center xl:text-left xl:mt-52">
                        <h1 className="font-[oswald] text-4xl md:text-6xl drop-shadow-2xl"><span className="text-[#cdb99f]">TERMS o</span>f USE</h1>
                        <div className="flex justify-center items-center gap-4 pt-6 xl:pt-0">
                            <a href="/index" className="font-[oswald] hover:underline text-[#ffff]">HOME</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-[#cdb99f]">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                            </svg>
                            <a className="font-[oswald] text-[#ffff] hover:text-[#cdb99f]">TERMS & CONDITIONS</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}