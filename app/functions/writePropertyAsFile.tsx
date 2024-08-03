"use server";

const fs = require("fs");

export const WritePropertyAsFile = async (properties: any) => {
  fs.writeFileSync("./public/properties.json", JSON.stringify(properties));
};
