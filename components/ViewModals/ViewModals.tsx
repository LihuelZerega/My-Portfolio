import React from "react";
import ViewModalSoyHenry from "./ViewModalSoyHenry";
import ViewModalCv from "./ViewModalCv";

const ViewModals = () => {

  return (
    <div className="flex mt-4 justify-center items-center">
      <ViewModalSoyHenry />
      <ViewModalCv />
    </div>
  );
};

export default ViewModals;
