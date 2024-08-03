"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  const handleLoggingIn = async (e: any) => {
    e.preventDefault();

    // console.log(`Login ${login} pass ${pass}`);

    const query = JSON.stringify({
      login,
      pass,
    });

    try {
      let res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: query,
      });

      const data = await res.json();

      if (data.status === 200) {
        console.log("Zalogowano!");
        router.push("/admin");
      } else {
        console.log("Niepoprawny login lub hasło");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url('/background_view.jpeg')] lg:bg-center bg-cover">
      <div className="h-[300px] bg-white flex items-center justify-center rounded-[10px] shadow-xl ">
        <form
          onSubmit={handleLoggingIn}
          className="w-[400px] h-[70%] flex flex-col items-center justify-between"
        >
          <p className="text-[24px] font-bold">Logowanie</p>
          <input
            onChange={(e: any) => setLogin(e.target.value)}
            value={login}
            placeholder="Login"
            className="border border-gray-700 w-[70%] h-[40px] mx-auto rounded-[5px] px-[5px]"
          ></input>
          <input
            onChange={(e: any) => setPass(e.target.value)}
            value={pass}
            placeholder="Hasło"
            className="border border-gray-700 w-[70%] h-[40px] mx-auto rounded-[5px] px-[5px]"
          ></input>
          <button className="bg-orange-500 w-[70%] h-[40px] rounded-[5px] text-white hover:bg-blue-500 duration-100">
            Zaloguj
          </button>
        </form>
      </div>
    </div>
  );
}
