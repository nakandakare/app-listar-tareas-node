const fs = require("fs");

const ruta = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(ruta, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(ruta)) {
    return null;
  }

  const data = fs.readFileSync(ruta, { encoding: "utf-8" });
  const parsedData = JSON.parse(data);

  return parsedData;
};

module.exports = {
  guardarDB,
  leerDB
};
