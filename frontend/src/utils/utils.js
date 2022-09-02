export const shortenAddress = (address) =>
  address.slice(0, 6) + "..." + address.slice(address.length - 4);

export const shortenTransactionHash = (hash) =>
  hash.slice(0, 12) + "....." + hash.slice(hash.length - 12);
