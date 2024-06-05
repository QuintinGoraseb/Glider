



export default function BigHero() {



    return(
        <>
        {/*** Hero Section ***/}
        <div className="relative top-0 left-0 w-full h-[90vh]">
            <img className="absolute w-full min-h-[430] h-screen object-cover bg-no-repeat brightness-50" src="/focus.jpg" alt="Hero" />
            <div className="w-full m-auto">
                <div className="absolute top-[40%] w-full text-white text-center flex flex-col p-4">
                    <h1 className="font-bold text-4xl md:text-5xl drop-shadow-2xl"><span className="text-[#C0C0C0]">Glider:</span><br/>Human Capital<br/>Business Consultants</h1>
                    <h2 className="text-lg text-[#C0C0C0]">Tailored solutions to your needs<span className="text-white">!</span></h2>
                </div>
            </div>
        </div>
        </>
    );
}