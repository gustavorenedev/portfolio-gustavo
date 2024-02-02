import { ElementButton } from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export const Button = ({ children, href }: ButtonProps) => {
  return <ElementButton href={href}>{children}</ElementButton>;
};
