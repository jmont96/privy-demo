import { CoinflowPurchase } from "@coinflowlabs/react";
import { useCallback, useMemo } from "react";
import { useWallet } from "../hooks/useWallet.tsx";
import { APP_THEME } from "../App.tsx";
import { useHeightHandler } from "../hooks/useHeightHandler.tsx";

export function Checkout() {
  const { height, handleHeightChange } = useHeightHandler();
  const wallet = useWallet();

  const onSuccess = useCallback(() => {
    // Optional - TODO
  }, []);

  const transaction = useMemo(() => {
    return {
      type: "safeMint",
      transaction: {
        data: "0x8bf921f0",
        to: "0xb6ec6F851e841CfF41B7aB4455b19EC0ED7E305B",
      },
      waitForHash: true,
    };
  }, []);

  return (
    <div style={{ height }}>
      <CoinflowPurchase
        amount={undefined} // Optional - hard code the amount to purchase
        transaction={transaction}
        wallet={wallet}
        merchantId={"privy"}
        env={"sandbox"}
        onSuccess={onSuccess}
        theme={APP_THEME}
        blockchain={"polygon"}
        email={""}
        loaderBackground={APP_THEME.background}
        handleHeightChange={handleHeightChange}
      />
    </div>
  );
}
