import { ElementButton } from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  onClick?: React.ReactEventHandler;
}

export const Button = ({ children, link, onClick, ...rest }: ButtonProps) => {
  return (
    <ElementButton link={link} onClick={onClick} {...rest}>
      {children}
    </ElementButton>
  );
};
