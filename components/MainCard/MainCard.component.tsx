interface IMainCard {
  children: React.ReactNode;
}

export const MainCard = ({ children }: IMainCard) => {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-white m-20 items-center">
      {children}
    </div>
  );
};
