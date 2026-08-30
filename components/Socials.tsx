import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "Email",
    link: "mailto:juttbroo1122@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jahanzaib-ali-5b7170300/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jahanzaibaliwp",
    Icon: RiFacebookLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/923227483975",
    Icon: RiWhatsappLine,
  },
  {
    name: "Call now",
    link: "tel:+923227483975",
    Icon: RiPhoneLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target={social.link.startsWith("http") ? "_blank" : undefined}
          rel={social.link.startsWith("http") ? "noreferrer noopener" : undefined}
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
