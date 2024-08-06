"use client";

import React from "react";
import { useState, useRef } from "react";

type Offer = {
  addYourOffer: any;
};

export default function AddYorOffer({ addYourOffer }: Offer) {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [meters, setMeters] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const buttonSubmit: any = useRef();

  const sendForm = async (e: any) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/addoffer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          city,
          meters,
          fullName,
          email,
          phone,
        }),
      });

      const data = await res.status;
      // console.log(data);
      buttonSubmit.current.innerHTML = " Wysłano";
      buttonSubmit.current.style.backgroundColor = " green";

      setTimeout(() => {
        buttonSubmit.current.innerHTML = " Wyślij zgłoszenie";
        buttonSubmit.current.style.backgroundColor = "orange";
        addYourOffer.current.style.display = "none";
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClosingWindow = () => {
    addYourOffer.current.style.display = "none";
  };
  return (
    <div
      ref={addYourOffer}
      className="hidden z-40 fixed top-[100px] left-0 right-0 mx-auto w-[400px] h-[520px] bg-white text-center shadow-xl"
    >
      <div
        onClick={handleClosingWindow}
        className="absolute bg-red-500 text-white px-[10px] cursor-pointer"
      >
        Zamknij X
      </div>
      <p className="mt-[30px] font-bold">
        Aby dodać ofertę uzupełnij krótki formularz, po weryfikacji skontaktujemy się z Tobą aby
        uzupełnić informacje.{" "}
      </p>
      <form
        onSubmit={sendForm}
        className="w-[80%] mx-auto h-[360px] flex flex-col justify-between mt-[30px]"
      >
        <input
          placeholder="rodzaj nieruchmości (lokal, mieszkanie itd.)"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setType(e.target.value)}
        ></input>
        <input
          placeholder="Miejscowość w której jest nieruchomość"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setCity(e.target.value)}
        ></input>
        <input
          placeholder="Metraż nieruchomości"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setMeters(e.target.value)}
        ></input>
        <input
          placeholder="Imię i nazwisko"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setFullName(e.target.value)}
        ></input>
        <input
          placeholder="e-mail do kontaktu (wymagane)"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setEmail(e.target.value)}
          required
        ></input>
        <input
          placeholder="telefon do kontaktu (opcjonalne)"
          className="border w-[100%] border-gray-400 rounded-sm h-[40px] pl-[5px]"
          onChange={(e: any) => setPhone(e.target.value)}
        ></input>
        <div className="w-full flex">
          <input
            required
            type="checkbox"
            placeholder="telefon do kontaktu (opcjonalne)"
            className="border w-[15px] border-gray-400 rounded-sm h-[15px] pl-[5px]"
          ></input>
          <p className="text-[10px] leading-[10px] text-left pl-[3px]">
            Wyrażam zgodę na przetwarzanie moich danych osobowych celem kontaktu ze mną w ramach
            zamówinej współpracu zgodnie z polityką prywatności.
          </p>
        </div>
        <button
          ref={buttonSubmit}
          className="bg-orange-400 text-white rounded-md h-[40px] w-[140px] mx-auto mt-[30px]"
        >
          Wyślij zgłoszenie
        </button>
      </form>
    </div>
  );
}
