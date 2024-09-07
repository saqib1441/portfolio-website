// Imports
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links &&
        links.map((link, key) => {
          return (
            <Link href={link.path} key={key} className={`${linkStyles}`}>
              {link.path === pathname && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className={`${underlineStyles}`}
                ></motion.span>
              )}
              {link.name}
            </Link>
          );
        })}
    </nav>
  );
};

export default Nav;
