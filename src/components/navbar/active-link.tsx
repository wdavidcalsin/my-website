import { Link, SystemStyleObject } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  href: string;
}

const ActiveLink: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();

  const customSyle: SystemStyleObject = {
    borderBottom:
      router.pathname === href ? "2px solid rgba(256, 256, 256 ,.5)" : "none",
    opacity: router.pathname === href ? "1" : "0.5",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      as={NextLink}
      onClick={handleClick}
      href={href}
      sx={{
        transition: "all .3s",
        rounded: "0.15rem",
        ...customSyle,
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
          transform: "scale(1.05)",
          opacity: "1",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
