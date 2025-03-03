import Image from "next/image";

const Circles = () => {
    return (
    <div className="absolute -bottom-2 -right-16 mix-blend-color-dodge z-10 w-[200px] xl:w-[300px] duration-75 animate-pulse">
        <Image
            src={"/circles.png"}
            alt="Circles"
            width={100}
            height={100}
            className="h-full w-full"/>
       </div>);
};

export default Circles;
