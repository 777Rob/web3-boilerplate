# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Copy compiled contract data with abis to the front-end

```
npm run copy-contracts
```

## Deploy all of the contracts to localhost, create formated contract files in website/src/contracts

### Example website/src/contracts/Lock.js:

```
import Lock from "./hardhat/Lock.json";
// To update hardhat contract details run: npm run update-contracts
// To deploy contracts on a local hardhat network and update details run: npm run setup-localhost

export let LockContract = {
  addressOrName: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
  contractInterface: Lock.abi,
};
```

## Destructuring is enough to make them ussable with wagmi

### Destructuring Example:

```
import {LockContract} from "contracts/Lock";

.......

const { config } = usePrepareContractWrite({
    ...LockContract,
    functionName: "createLock",
    overrides: {
      from: address,
      value: ethers.utils.parseEther(amount.toString()),
    },
    onSettled(data, error) {
      console.log("Settled", { data, error });
    },
  });


```

```
npm run setup-localhost
```
