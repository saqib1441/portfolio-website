import Link from "next/link";
import LogoImg from "@/assets/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={LogoImg}
        alt="saqib-ali-logo"
        width={54}
        height={54}
        priority
      />
    </Link>
  );
};

export default Logo;
