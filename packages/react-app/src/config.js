import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf6EB741430Ebd107d8D8f478184ea54047956270"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/9qxcHBGgAkya6U8IsC5asD8JN-kjazxB",
  },
};