import { BaseText } from "@/components";
import { InfoPair } from "./InfoPair.component";
import Link from "next/link";

const InfoPairPage = () => {
  return (
    <div>
      <Link href="/orderbook">
        <BaseText className="ml-4 mt-4">Home</BaseText>
      </Link>
      <InfoPair />;
    </div>
  );
};

export default InfoPairPage;
