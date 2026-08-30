import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar-higgsfield.webp"
        alt="Jahanzaib Ali"
        width={737}
        height={678}
        className="translate-z-0 h-full w-full object-contain object-bottom"
      />
    </div>
  );
};

export default Avatar;
