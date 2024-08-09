import React from "react";

type Question = {
  data: any;
};

export default function QandaComponent({ data }: Question) {
  return <div className="border border-[#e4c27e] w-[90%]">{data.topic}</div>;
}
