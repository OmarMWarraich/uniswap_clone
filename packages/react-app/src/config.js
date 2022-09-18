import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xe472Cb3BC88d20e24E17B4814f68a0B93911F212"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/ThakbTECkLZ9SU7mMpClMitB6JxZEVaj",
  },
};