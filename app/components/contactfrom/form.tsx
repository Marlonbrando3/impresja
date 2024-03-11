import React from "react";

export default function Form() {
  return (
    <form className="p-[30px] bg-blue-400 rounded-[7px] mx-auto lg:w-[900px]">
      <div className="text-white text-[25px] mb-[30px] w-[300px] font-bold">
        Jak możemy Ci pomóc?
      </div>
      <div className="flex justify-center flex-col lg:flex-row">
        <div className="flex lg:w-[420px] w-full flex-wrap h-[230px]">
          <div className="lg:w-[210px] w-full">
            <div className="text-white">Imię</div>
            <input className="lg:w-[200px] w-full rounded-[5px] h-[35px]"></input>
          </div>
          <div className="lg:w-[210px] w-full">
            <div className="text-white">Nazwisko</div>
            <input className="lg:w-[200px] w-full rounded-[5px] h-[35px]"></input>
          </div>
          <div className="lg:w-[410px] w-full">
            <div className="text-white">Adres e-mail</div>
            <input className="lg:w-[410px] w-full rounded-[5px] h-[35px]"></input>
          </div>
          <div className="lg:w-[410px] w-full">
            <div className="text-white">Telefon kontaktowy (same cyfry)</div>
            <input className="lg:w-[410px] w-full rounded-[5px] h-[35px]"></input>
          </div>
        </div>
        <div>
          <div className="lg:w-[410px] w-full mt-[5px] lg:mt-0">
            <div className="text-white">Twoja wiadomość</div>
            <textarea className="lg:w-[410px] w-full rounded-[5px] h-[189px]"></textarea>
          </div>
        </div>{" "}
      </div>
      <div className="flex">
        <input type="checkbox" className="w-[25px] h-[25px] text-orange-500 cursor-pointer"></input>
        <p className="text-white ml-[4px]">
          Wyrażam zgodę na przetwarzanie moich danych osobowych celem kontaktu ze mną oraz w celach
          marketingowych. Zgodnie z polityką prywatności.
        </p>
      </div>
      <button className="text-white p-[7px] rounded-[5px] bg-orange-500 w-[150px] mt-[15px] hover:bg-blue-500 duration-200">
        Wyślij formularz
      </button>
    </form>
  );
}
