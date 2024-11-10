import Button from "../../utilities/Button";
import img from "../../assets/logo.png";


function HomeView() {
    return (
        <div className=" h-screen bg-white text-black flex flex-col md:flex-row justify-center items-center md:gap-8">
          {/* content section  */}
          <div className=" w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
            <h1 className=" text-4xl lg:text-7xl font-bold leading-tight">
            Ryomgård <span className="text-yellow-500">pizza og kebab</span> 
            </h1>
            <p className=" text-sm lg:text-base">
            kvalitet, service og renlighed Friske varer. 
            Kom og smag Ryomgårds bedste pizza!  </p>
            <Button title="Read More" />
          </div>
    
          {/* img section  */}
          <div className=" mt-14">
            <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="img" />
          </div>
        </div>
      );
}

export default HomeView
