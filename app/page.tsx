import ProjectBtn from "./(components)/projectBtn/ProjectBtn";
import Motion2 from "./(components)/motion/motion2";
import Hometext from "./(components)/motion/hometext";
import Avatar from "./(components)/avatar/Avatar";
import ParticlesCon from "./(components)/particlesContainer/ParticlesCon";


export default function Home() {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradiet-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <Hometext />
          {/* Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <Motion2 />
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        {/* background Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full  h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div className="xl:hidden">
        <ParticlesCon/>
        </div>
        <div>
         <Avatar/>
        </div>
      </div>
    </div>
  );
}
