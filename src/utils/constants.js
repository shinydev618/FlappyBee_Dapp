const IS_MAINNET = process.env.REACT_APP_NETWORK === "mainnet";

const CONTRACTS = IS_MAINNET
  ? {
      BEETToken: "0x9E1f90970D6cbDdf193F418281612B7aF563985A",
      BEETStaking: "0x00ec63A76C4a7282c0aA88f3f20e78DAA78D4030",
    }
  : {
      BEETToken: "0x6e35685B244daa4c50e0645300b19df56A132a72",
      BEETStaking: "0x00ec63A76C4a7282c0aA88f3f20e78DAA78D4030",
    };

const HTTP_PROVIDER_URL = IS_MAINNET
  ? "https://mainnet.infura.io/v3/"
  : "https://goerli.infura.io/v3/b45ff4de8a1e4e7db9b781b4a8fcdc5a";

export { IS_MAINNET, CONTRACTS, HTTP_PROVIDER_URL };
