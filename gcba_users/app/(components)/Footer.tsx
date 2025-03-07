import Image from "next/image";


export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://buenosaires.gob.ar/inicio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/gcba_title_logo.svg"
          alt="Globe icon"
          width={250}
          height={250}
        />
      </a>
    </footer>
  );
}