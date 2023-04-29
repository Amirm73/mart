import styled from "styled-components";
import { HeaderHome } from "../organisms";
import { NavbarHome } from "../organisms/Navbar";
import { carosel } from "$/lib/MockData";
import BoxProducts from "../molecules/home/BoxProducts";
import { Color } from "$/lib/Design";
import { discountMockdata } from "$/lib/MockData/discountMockdata";
import { ProposalMockdata } from "$/lib/MockData/ProposalMockdata";
import ProductCategory from "../organisms/home/ProductCategory";
import BestBerand from "../organisms/home/BestBerand";
import Footer from "../organisms/Footer";
import Category from "../organisms/home/Category";
import Grouping from "../organisms/home/Grouping";
import AdvertisingCarosel from "../organisms/home/AdvertisingCarosel";

type Advertising = {
  advertising: string;
};

export const Homepage: React.FC = () => {
  return (
    <>
      {carosel.image && (
        <Advertising>
          <Image src={carosel.image} alt="" />
        </Advertising>
      )}

      <HeaderHome />
      <NavbarHome />
      <AdvertisingCarosel />
      <Category />
      <Grouping />
      <BoxProducts
        title="پیشنهاد شگفت انگیز "
        image="discount.png"
        bg={Color.red}
        color="white"
        products={discountMockdata}
        arrow="/leftWhite.png"
      />
      <ProductCategory />
      <BoxProducts
        title="پیشنهاد ماریت "
        products={ProposalMockdata}
        arrow="/leftBlack.png"
      />

      <BoxProducts
        title="پرفروش ترین کالا ها"
        products={discountMockdata}
        arrow="/leftBlack.png"
      />
      <BestBerand />
      <Footer />
    </>
  );
};

const Advertising = styled.div`
  width: 100%;
  height: 3rem;
  background: linear-gradient(
    89.89deg,
    rgba(63, 242, 251, 0.5) 0.1%,
    rgba(254, 222, 255, 0.82) 59.56%
  );
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
