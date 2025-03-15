import { BaseText, MainCard } from "../../components";
import { PairList } from "./components/PairList.component";

export const OrderBook = () => {
  return (
    <MainCard>
      <BaseText className="text-black mb-10 text-xl font-mono mt-20">
        Exchange OrderBook
      </BaseText>
      <PairList />
    </MainCard>
  );
};
