
interface LoaderProps {
  text?: string;
  className?: string;
}


export default function Loader({ text, className }: LoaderProps) {
  return (
    <span className="flex items-center gap-2">
      <svg className={`size-6 animate-spin ${className}` }viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      <p className="font-mono">{text?.toUpperCase() || "Cargando..."}</p>
    </span>
  );
};