interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <a
      href={href}
      className="rounded-2xl border p-2 text-center text-white text-foreground font-medium text-base leading-6"
    >
      {children}
    </a>
  );
}
