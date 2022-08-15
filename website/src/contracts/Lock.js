import LockContract from "./hardhat/Lock.json";
// To update hardhat contract details run: npm run update-contracts
// To deploy contracts on a local hardhat network and update details run: npm run setup-localhost

export let Lock = {
  addressOrName: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  contractInterface: LockContract.abi,
};
