
import cod from "../../public/COD.mp4";

const Video = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative w-full h-full">
        <video
          src={cod} // Correct path for files in the public folder
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>


      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 px-4 text-center">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-100 leading-tight">
          Immersive Adventures Await
        </h1>


        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 dark:text-gray-400 max-w-md md:max-w-lg lg:max-w-2xl">
          Click here to download the game and embark on an unforgettable gaming journey!
        </p>

   
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white dark:text-gray-100 font-semibold rounded-lg hover:scale-105 transition-transform text-sm md:text-base lg:text-lg">
          Download Now!
        </button>
      </div>
    </div>
  );
};

export default Video;