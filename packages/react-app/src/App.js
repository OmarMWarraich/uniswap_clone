import React from "react";
import { useEthers } from "@usedapp/core";

import styles from './styles';
import { uniswapLogo } from './assets';
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const poolsLoading = false;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-20 h-20 
            object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap</h1>
          <p className={styles.subTitle}>
            Trade tokens in an instant
          </p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className   ="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loadin pools, please wait!"/>
                  ) : <Exchange />
                ) : <Loader title="Please connect your wallet."/>}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;