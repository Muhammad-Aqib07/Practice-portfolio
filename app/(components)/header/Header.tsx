import Link from "next/link";
import Socials from "../socials/Socials";

export default function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
        
            <h1 className="text-3xl font-semibold">
              A<span className="text-accent">qi</span>
              B k<span className="text-accent font-semibold text-2xl">ha</span>N
            </h1>
            
          </Link>
          <Socials></Socials>
        </div>
      </div>
    </header>
  );
}
