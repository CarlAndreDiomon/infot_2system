import Navbar from "../../components/Navbar";
import Slideshow from "../../components/Slideshow";

export default function components(){
    return(
        <main className=" h-screen bg-yellow-50">
            <nav>
                <Navbar/>
            </nav>
            
            {/* Header Of Slide show page */}
            <div className=" p-5">
                <div className=" text-4xl font-semibold md:flex md:justify-center xl:justify-start xl:text-5xl">
                    <h1 className="">
                        One of the <span className=" text-green-300"> Filipino </span>  heritage 
                        The KAR<span className=" text-yellow-300 ">A</span>N-<span className="text-red-600">U</span>N 
                    </h1>
                </div>
                {/* design and interface of slideshow */}
                <div className = " flex justify-center ">
                    <div className = " p-1 mt-16 shadow-black shadow-lg h-96 rounded-xl w-80 md:w-full md:flex md:justify-center md:items-center lg:w-4/5 xl:ring-opacity-0 ">
                        <Slideshow/>
                    </div>
                </div>
            </div>
        </main>
    );
}