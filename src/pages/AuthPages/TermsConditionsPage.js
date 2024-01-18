import React from "react";
import { Link } from "react-router-dom";
import SideTwo from "../../components/CommonComponents/SideTwo";

const TermsConditionsPage = () => {
  return (
    <div className="flex w-[100%]">
      {/* side one  */}
      <div className="flex w-[100%] lg:w-[50%] flex-col justify-center">
        <div className="sm:mx-10 md:mx-20 lg:mx-[4rem] 2xl:mx-[14rem] mx-10  mt-10">
          <Link
            to="/signup"
            className="text-[#CF2D39] inline  hover:text-[#b0242f]"
          >
            &lt; &nbsp; Back
          </Link>
        </div>
        <div className="sm:mx-10 md:mx-20 lg:mx-[4rem] 2xl:mx-[14rem] mx-10 my-4">
          <div className="text-left font-[700] text-[28px]">
            Terms and condtions
          </div>
          <div className="text-slate-500 my-3">
            Please review and agree to the documents below.
          </div>
          <div className="text-slate-500 my-3 mt-5 text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Id
            cursus metus aliquam eleifend. Ut pharetra sit amet aliquam. Aenean
            pharetra magna ac placerat vestibulum lectus mauris. Mollis nunc sed
            malesuada bibendum arcu. Duis at tellus at urna condimentum mattis.
            Sed elementum tempus egestas sed sed risus pretium. Nunc mi ipsum
            faucibus vitae aliquet nec ullamcorper sit. Sem fringilla u
          </div>
          <div className="text-slate-500 my-3 mt-5 text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Id
            cursus metus aliquam eleifend. Ut pharetra sit amet aliquam. Aenean
            pharetra magna ac placerat vestibulum lectus mauris. Mollis nunc sed
            id semper risus in hendrerit gravida.
          </div>
        </div>
      </div>
      {/* side two  */}
      <SideTwo />
    </div>
  );
};

export default TermsConditionsPage;
