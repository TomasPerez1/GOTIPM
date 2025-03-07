"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const links = [{ href: "/", text: "CREAR EMPLEADO" },{ href: "/dashboard", text: "DASHBOARD" }];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="ml-4 absolute top-3 flex items-center w-fit gap-5 p-2 border-b">
      {
        links.map(link => (<Link key={link.text} href={link.href}><button className="default-button" disabled={pathname === link.href && true}>{link.text}</button></Link>))
      }
    </nav>
  );
};