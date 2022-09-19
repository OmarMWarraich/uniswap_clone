import React, { useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { abis } from '@my-app/contracts';
import { ERC20, useContractFunction, useEthers, useTokenAllowance, useTokenBalance } from '@usedapp/core';
import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';

import { getAvailableTokens, getCounterpartTokens,
findPoolByTokes, isOperationPending, getFailureMessage,
getSuccessMessage } from '../utils';
import { ROUTER_ADDRESS } from '../config';
import { AmountIn, AmountOut, Balance } from './';
import styles from '../styles';
 
const Exchange = ({ pools }) => {
  const isApproving = isOperationPending('approve'); // TODO
  const isSwapping = isOperationPending('swap');  // TODO

  // const successMessage = getSuccessMessage(); // TODO
  // const failureMessage = getFailureMessage(); // TODO

  return (
    <div className="flex flex-col w-full items-center">
      <div className="mb-8">
        <AmountIn

        />
        <Balance />
      </div>

      <div className="mb-8 w-[100%]">
        <AmountOut

        />
        <Balance />
      </div>

      {"approvedNeeded" && !isSwapping ? (
        <button
          disabled={!"canApprove"}
          onClick={() => {}}
          className= {
            `${
              "canApprove"
              ? "bg-site-pink text-white"
              : "bg-site-dim2 text-site-dim2"
            } ${styles.actionButton}`
          }
        >
          {isApproving ? "Approving..." : "Approve"}
        </button>
      ) : <button
      disabled={!"canSwap"}
      onClick={() => {}}
      className= {
        `${
          "canSwap"
          ? "bg-site-pink text-white"
          : "bg-site-dim2 text-site-dim2"
        } ${styles.actionButton}`
      }
    >
      {isSwapping ? "Swapping..." : "HasEnoughBalance" ? "Swap" : "Insufficient Balance"}
    </button>
}

    {"failureMessage" && "!resetState" ? (
      <p className={styles.message}>{"failureMessage"}</p>
    ) : "successMessage" ? (
      <p className={styles.message}>{"successMessage"}</p>
    ) : ""}

    </div>
  )
}

export default Exchange