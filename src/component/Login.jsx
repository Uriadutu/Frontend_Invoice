import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";
import Logo from "../img/logoAPK.png"


const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/makanan");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(loginUser({ Username, Password }));
  };

  return (
    <div className="">
      <section className="bg-white sm:bg-transparent">
        <div className="flex justify-center items-center">
          <div className=" is-center">
            <div className="is-4">
              <form
                onSubmit={Auth}
                className="relative w-[350px] bg-opacity-80 sm:bg-white sm:shadow-lg sm:rounded-lg px-5 py-10 sm:px-10 sm:py-10"
              >
                <div className="flex justify-center mt-2">
                  <div className="">
                    <img src={Logo} alt="" />
                    <p className="text-[#E7C057] uppercase font-bold text-center text-3xl">
                      Victoria
                      <br />
                      inn
                    </p>
                  {isError && (
                    <div className="px-4 py-2 text-red-600 bg-red-100 border border-red-300 rounded-md">
                      {message}
                    </div>
                  )}
                  </div>
                </div>

                <div className=" mt-4 w-full flex justify-center">
                  <input
                    type="text"
                    className="input w-full p-2"
                    value={Username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-4 w-full flex justify-center">
                  <input
                    type="password"
                    className="input w-full p-2"
                    value={Password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className=" mt-4">
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-900 bg-opacity-80 text-white rounded hover:bg-blue-600"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
