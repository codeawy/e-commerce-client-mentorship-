interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return (
    <div
      className="
        container 
        mx-auto 
        px-4          
        sm:px-8       
        md:px-8          
        2xl:px-[135px] 
        h-full w-full"
    >
      {children}
    </div>
  );
};

export default Container;
