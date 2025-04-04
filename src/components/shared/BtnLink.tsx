interface BtnLinkProps {
    href: string;
    text: string;
    className?:string;
}

export default function BtnLink({ text, href ,className= "" }: BtnLinkProps) {
  return (
<a href={href} className={`px-6 rounded-full outline-none relative overflow-hidden
border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}>
  <span className="relative z-10 text-white">{text}</span>
</a>
  );
}
