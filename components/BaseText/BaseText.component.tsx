interface IBaseText {
  children: React.ReactNode;
  className?: string;
}

export const BaseText = ({ children, className }: IBaseText) => {
  return <h1 className={`${className} font-mono`}>{children}</h1>;
};
