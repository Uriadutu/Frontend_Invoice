import React, { useState } from "react";
import { FaBowlFood, FaGlassWater } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut, IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../img/logoAPK.png";
import MenejemenAkunModal from "./modals/MenejemenAkunModal";
import { AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [openAkun, setOpenAkun] = useState(false);

  const handleManajemen = () => {
    setOpenAkun(true);
  };

  return (
    <div className="hidden sm:block z-40 bg-gradient-to-t from-[#202020] to-[#000000] w-64 px-6 h-[100vh] drop-shadow-lg relative">
      <AnimatePresence>
        {openAkun && <MenejemenAkunModal setIsOpenModalAdd={setOpenAkun} />}
      </AnimatePresence>
      <div className="w-full">
        <div className="w-full">
          <Link
            to="/makanan"
            className="mt-5 text-white rounded-md flex justify-center items-center w-full"
          >
            <img src={logo} className="w-40" alt="" />
          </Link>
        </div>
        <div className="mt-[16%] grid gap-y-3">
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
            onClick={handleManajemen}
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
  );
};

export default Sidebar;
