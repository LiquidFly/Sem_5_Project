const mongoose = require("mongoose");

async function ConnectWithDB(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Connect with DB successfully Done!");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = { ConnectWithDB };
