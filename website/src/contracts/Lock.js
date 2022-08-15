import LockContract from "./hardhat/Lock.json";
// To update hardhat contracts and copy them into hardhat folder
// run cd hardhat && npm run copy-contracts

export let Lock = {
  address: "0x8d12A197cB00D4747a1fe03395095ce2A5D9Ab8A",
  abi: LockContract.abi,
};
