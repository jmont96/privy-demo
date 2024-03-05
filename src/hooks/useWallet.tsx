import { useCallback } from "react";

export type EthWallet = {
  address: string | null | undefined;
  sendTransaction: (transaction: unknown) => Promise<{ hash: string }>;
  signMessage: (message: string) => Promise<string>;
};

export function useWallet(): EthWallet {
  const address = "0x..."; // TODO

  const sendTransaction = useCallback(
    async (transaction: unknown): Promise<{ hash: string }> => {
      //TODO
      return { hash: "" };
    },
    [],
  );

  const signMessage = useCallback(async (message: string): Promise<string> => {
    //TODO
    return "";
  }, []);

  return {
    address,
    sendTransaction,
    signMessage,
  };
}
