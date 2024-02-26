import Image from "next/image";

export default function Circles() {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-40 z-10  ">
      <Image
        src={"/circles.png"}
        width={240}
        height={180}
        className="w-full h-full "
        alt=""
      ></Image>
    </div>
  );
}
