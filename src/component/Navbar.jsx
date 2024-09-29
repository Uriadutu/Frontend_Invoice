import React, { useState } from "react";
import LogoApp from "../img/logoAPK.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut, IoPerson } from "react-icons/io5";
import { FaBowlFood, FaGlassWater } from "react-icons/fa6";
import { LogOut, reset } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import MenejemenAkunModal from "./modals/MenejemenAkunModal";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);
  const [openAkun, setOpenAkun] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const handleManajemen = () => {
    setOpenSideBar(false);
    setOpenAkun(true);
  };

  return (
    <div>
      <div className="">
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed inset-0 flex items-center justify-start z-40 bg-black bg-opacity-60 transition-opacity duration-500 ${
            openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute z-40 bg-gradient-to-t from-[#202020] to-[#000000] w-64 h-[100vh] drop-shadow-lg transform transition-transform duration-500 ${
              openSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="w-full">
              <div className="w-full relative">
                <button
                  onClick={() => setOpenSideBar(false)}
                  className="absolute top-1 right-2"
                >
                  <IoIosClose color="white" size={30} className="" />
                </button>
                <Link
                  to="/makanan"
                  className=" text-white rounded-md flex justify-center items-center w-full pt-2"
                >
                  <img src={LogoApp} className="w-40" alt="" />
                </Link>
              </div>
              <div className="mt-[16%] grid gap-y-3 px-3">
                <Link
                  to="/makanan"
                  className="rounded-md text-white flex items-center text-sm w-full text-left"
                >
                  <FaBowlFood color="white" size={15} className="mr-4" />
                  Makanan
                </Link>
                <Link
                  to="/minuman"
                  className="rounded-md text-white flex items-center text-sm w-full text-left"
                >
                  <FaGlassWater color="white" size={15} className="mr-4" />
                  Minuman
                </Link>
                <button
                  onClick={() => handleManajemen()}
                  className="rounded-md text-white flex items-center text-sm w-full text-left"
                >
                  <IoPerson color="white" size={15} className="mr-4" />
                  Manajemen Akun
                </button>
                <button
                  onClick={logout}
                  className="rounded-md text-white flex items-center text-sm w-full text-left"
                >
                  <IoLogOut color="white" size={15} className="mr-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openAkun && <MenejemenAkunModal setIsOpenModalAdd={setOpenAkun} />}
      </AnimatePresence>
      <div className="sm:hidden block bg-black w-full flex m-0 py-4 z-10 justify-between items-center fixed">
        <div className="flex pl-5 justify-between w-full items-center">
          <button onClick={() => setOpenSideBar(true)} className="">
            <GiHamburgerMenu color="#E7C057" size={20} />
          </button>
          <div className="text-black mx-8 flex justify-end">
            <img src={LogoApp} className="flex w-20 sm:w-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
