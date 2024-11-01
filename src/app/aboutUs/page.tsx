import Navbar from "../../components/Navbar";

export default function aboutUs(){
    return(
        <main className = " w-screen h-screen bg-white ">
            {/*  */}
            <nav>
                <Navbar/>
            </nav>
            <div className=" pt-5 p-3 ">
                <div >
                    <h1 className=" text-lg">
                        About Us
                    </h1>
                </div>
                <div>
                    <h1>
                        Filipino Heritage System
                    </h1>
                    <h2>
                        Fucos in Karan-un
                    </h2>
                </div>
                
            </div>
        </main>
    )
}