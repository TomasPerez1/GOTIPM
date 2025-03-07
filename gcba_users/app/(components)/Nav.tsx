import Link from "next/link";


export default function Nav() {

  const links = [{ href: "/", text: "CREAR EMPLEADO" },{ href: "/dashboard", text: "DASHBOARD" }];

  return (
    <nav className="ml-4 absolute top-3 flex items-center w-fit gap-5 p-2 border-b">
      {
        links.map(link => (<Link key={link.text} href={link.href}><button className="default-button">{link.text}</button></Link>))
      }
    </nav>
  );
};