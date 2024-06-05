export default function Hero(){
    return(
        <div className="absolute top-0 left-0 w-full">
            <img className="relative w-full min-h-[430px] object-cover bg-no-repeat brightness-50" src="/banner.jpg" alt="Hero" />
            <div className="w-full m-auto">
                <div className="absolute top-[40%] w-full text-white text-center flex flex-col p-4">
                    <h1 className="font-bold text-4xl md:text-5xl drop-shadow-2xl">Services</h1>
                    <div className="flex gap-2 items-center justify-center">
                        <a href="#" className="Link">Home</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                        <a href="#" className="text-[#c0c0c0]">Services</a>
                    </div>
                </div>
            </div>
        </div>
    );
}