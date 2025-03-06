import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header>
        BSAS PAAA
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Soy el main</h1>
      </main>
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
    </div>
  );
}
