const fs = require("fs");
const hre = require("hardhat");
function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function (err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function (err) {
    done(err);
  });
  wr.on("close", function (ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

const FRONTEND_DIR = "../website/src/contracts";

const main = async () => {
  const contracts = fs.readdirSync("./artifacts/contracts");
  let i = 0;

  for (const contract of contracts) {
    const contractName = contract.slice(0, contract.length - 4);
    const source = `./artifacts/contracts/${contract}/${contractName}.json`;
    const target = `${FRONTEND_DIR}/hardhat/${contractName}.json`;
    await copyFile(source, target, (e) => {
      i++;
      let messageSuccess =
        "Successfully copied contract " +
        contractName +
        " " +
        i +
        "/" +
        contracts.length;
      let messageError = "Error copying contract" + contractName + e;
      let message = e == undefined ? messageSuccess : messageError;
      console.log(message);
    });
  }
};

main().catch(console.error);
