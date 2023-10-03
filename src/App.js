import React, { useState } from "react";

function App() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckPasswords = () => {
    if (password1 === password2) {
      setMessage("Passwords match. User logged in :D.");
    } else {
      setMessage("Passwords don’t match. Try again!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 pt-[3em] pb-12">
              <div className="text-center">
                <div className="mb-14 mt-14 flex w-full flex-row justify-around">
                  <h2 className="font-bold text-3xl md:text-5xl">
                    Password Checker
                  </h2>
                </div>
                <div className="mx-auto w-full max-w-[400px]">
                  <div className="mx-auto max-w-[400px] mb-4 pb-4">
                    <div name="wf-form-password">
                      <div className="relative">
                        <img
                          alt=""
                          src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                          className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full"
                        />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          value={password1}
                          className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14"
                          onChange={(e) => setPassword1(e.target.value)}
                        />
                      </div>
                      <div className="relative">
                        <img
                          alt=""
                          src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                          className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full"
                        />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={password2}
                          className="m-0 mb-4 block w-full border border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-14"
                          onChange={(e) => setPassword2(e.target.value)}
                        />
                      </div>
                      <div className="w-full grid gap-8">
                        <button
                          onClick={handleCheckPasswords}
                          className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] px-8"
                        >
                          Check Passwords
                        </button>
                        <button
                          onClick={togglePasswordVisibility}
                          className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] px-8"
                        >
                          {showPassword ? "Hide Passwords" : "Show Passwords"}
                        </button>
                        <p>{message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
