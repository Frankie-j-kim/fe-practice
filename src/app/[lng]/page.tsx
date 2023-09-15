import { Suspense } from "react";
import BestProduct from "components/BestProduct";
import DownLoadSection from "components/DownLoadSection";
import Footer from "components/Footer";
import Header from "components/Header";
import Information from "components/Information";
import MainBanner from "components/MainBanner";
import Blog from "components/Blog";
import AllmenuContainer from "./AllmenuContainer";

type Props = {
  params: {
    lng: string;
  };
};

const Page = async ({ params: { lng } }: Props) => {
  return (
    <AllmenuContainer>
      <>
        <Header lng={lng} />
        <main>
          <Suspense fallback={<div style={{ height: "560px" }}>Loaing</div>}>
            <MainBanner lng={lng} />
          </Suspense>
          <BestProduct lng={lng} />
          <DownLoadSection lng={lng} />
          <Suspense fallback={<div style={{ height: "310px" }}>Loaing</div>}>
            <Blog lng={lng} />
          </Suspense>
          <Information lng={lng} />
        </main>
        <Footer lng={lng} />
      </>
    </AllmenuContainer>
  );
};

export default Page;
