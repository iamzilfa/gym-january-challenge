const Wrapper = ({style,children}) => {
  return (
    <div className={`bg-[#ddd] relative ${style}`}>
      <div className="w-[1170px] container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
