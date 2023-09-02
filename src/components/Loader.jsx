function Loader() {
  return (
    <div className=" flex items-center justify-center h-screen absolute left-0 top-0 z-30 backdrop-blur-md w-screen bg-opacity-50 bg-stone-800">
      <span className=" bg-transparent w-[120px] h-[120px]   absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="w-full h-full custom-spin rounded-full border-yellow-500"></div>
      </span>
      <span className="text-[50px] rotate-[20deg] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        🍕
      </span>
    </div>
  );
}

export default Loader;
