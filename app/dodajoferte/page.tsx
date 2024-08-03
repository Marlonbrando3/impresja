import React from "react";
import Header from "../components/header/header";

export default function AddOffer() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <div className="py-[50px]">
        <form className="lg:w-[820px] md:w-[500px] mx-auto  flex bg-white flex-wrap items-center justify-center rounded-[10px]">
          <p className="w-full text-[30px] text-center my-[20px]">
            Zgłoszenie nieruchomości do dodania
          </p>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Tytuł ogłoszenia</p>
            <input className="border border-gray-400 w-full rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Miejscowość</p>
            <input className="border border-gray-400 w-full rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Województwo </p>
            <input className="border border-gray-400 w-full rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Rodzaj nieruchomości (wybierz z listy)</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Mieszkanie</option>
              <option>Dom</option>
              <option>Działka</option>
              <option>Garaż</option>
            </select>
          </div>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Powierzchnia lokalu w m2</p>
            <input className="border border-gray-400 w-[50px] rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Liczba pokoi</p>
            <input className="border border-gray-400 w-[50px] rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Piwnica</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Balkon</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px]  w-[400px]">
            <p>Zamknięta kuchnia</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Piętro lokalu</p>
            <input className="border border-gray-400 w-[50px] rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Liczba pięter w budynku</p>
            <input className="border border-gray-400 w-[50px] rounded-[5px]"></input>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Winda</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Garaż</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Parking</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Przypisane miejsce parkingowe</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Do remontu</p>
            <select className="bg-gray-200 w-full rounded-[5px]">
              <option>Tak</option>
              <option>Nie</option>
            </select>
          </div>
          <div className="flex-col p-[10px] w-[400px]">
            <p>Opis ogłszenia</p>
            <textarea className="border border-gray-400 w-full rounded-[5px] h-[200px]"></textarea>
            <div className="flex items-start ">
              <input type="checkbox" required className="w-[55px] h-full block"></input>
              <p className="leading-4 text-[12px]">
                Wyrażam zgodę na wysłanie oraz opublikowanie ogłoszenia na portalu Impresja. Zgadzam
                się na przetwarzanie danych zgodnie z polityką prywatności Onesta Group Sp. z o.o.
              </p>
            </div>
            <button className="bg-blue-500 text-white w-full rounded-[5px]">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  );
}
