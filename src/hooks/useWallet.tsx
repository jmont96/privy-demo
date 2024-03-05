import { useCallback, useMemo } from "react";
import { ethers } from "ethers";

export type EthWallet = {
  address: string | null | undefined;
  sendTransaction: (
    transaction: ethers.providers.TransactionRequest,
  ) => Promise<{ hash: string }>;
  signMessage: (message: string) => Promise<string>;
};

export function useWallet(): EthWallet {
  const privateKey = ""; // TODO replace with Privy

  // TODO replace with Privy
  const wallet = useMemo(
    () =>
      new ethers.Wallet(
        privateKey,
        new ethers.providers.JsonRpcProvider(
          "https://polygon-mumbai-bor.publicnode.com",
        ),
      ),
    [privateKey],
  );

  const address = wallet.address; // TODO replace with Privy

  // TODO replace with Privy
  const sendTransaction = useCallback(
    async (
      transaction: ethers.providers.TransactionRequest,
    ): Promise<{ hash: string }> => {
      return await wallet.sendTransaction(transaction);
    },
    [wallet],
  );

  // TODO replace with Privy
  const signMessage = useCallback(
    async (message: string): Promise<string> => {
      const permitData = JSON.parse(message);
      return await wallet._signTypedData(
        permitData.domain,
        { Permit: permitData.types.Permit },
        permitData.message,
      );
    },
    [wallet],
  );

  return {
    address,
    sendTransaction,
    signMessage,
  };
}
