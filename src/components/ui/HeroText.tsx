import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";






const HeroText = () => {
    return (
        <BackgroundBeamsWithCollision>
            <div>
            <h2 className="text-xl relative z-20 md:text-4xl lg:text-5xl 2xl:text-7xl font-bold  text-center text-black dark:text-white font-sans tracking-tight w-full">
                Explore the world with our
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">comfortable car.</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">comfortable car.</span>
                    </div>
                    <button className="btn shadow-lg shadow-black/30 border-none hover:btn-secondary bg-blue-600 text-lg font-semibold text-white">Book Now</button>
                </div>
            </h2>
            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroText;