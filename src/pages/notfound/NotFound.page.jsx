import Error from "../../assets/images/error.png"
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh] gap-10">
      <img className="items-center" width={120} height={120} src={Error} alt="error label for 404"/>
      <h1 className="font-[600] text-[14px] lg:text-[16px] xl:text-[20px] text-center">Page not found</h1>
    </div>
  );
};

export default NotFound;
