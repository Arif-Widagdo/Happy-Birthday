import React from "react";

import spesial_mail from "../../assets/img/spesial_mail.png";

export default function Greetings() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center w-8/12 h-auto p-8 text-center bg-white lg:w-3/12 rounded-xl gap-y-2">
        <h1 className="text-xl font-bold">Ada Pesan Buat Kamu Ncieem</h1>
        <img src={spesial_mail} alt="" srcset="" className="w-full h-auto" />
        <p className="text-center">
          Mari kita buka yuk.. <span> :) </span>
        </p>
      </div>
    </div>
  );
}
