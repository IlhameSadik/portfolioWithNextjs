import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-6 xl:w[260px] -bottom-12 rotate-12 mix-blend-color-dodge">

    <Image src="/bulb.png" width={260} height={200} alt="bulb" />
  </div>);
};

export default Bulb;
