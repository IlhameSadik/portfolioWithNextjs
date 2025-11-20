import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="
        absolute
        left-1/2
        bottom-4
        -translate-x-1/2
        w-32
        opacity-80

        sm:left-auto
        sm:-left-6
        sm:-bottom-12
        sm:w-48
        sm:opacity-100
        sm:rotate-12

        xl:w-[260px]
      "
    >
      <Image src="/bulb.png" width={260} height={200} alt="bulb" />
    </div>
  );
};

export default Bulb;
