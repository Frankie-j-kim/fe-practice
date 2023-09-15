"use client";
import Slider from "react-slick";
import { useTranslation } from "app/i18n/client";
import defaultStyle from "styles/bestProduct.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestProductItem from "./BestProductItem";

type Props = {
  lng: string;
};

const BestProduct = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "common");
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false
  };
  return (
    <section className={defaultStyle.ho_001}>
      <div className={defaultStyle.view_default}>
        <h2 className={defaultStyle.headline}>{t("INDEX_STR01")}</h2>
        <p className={defaultStyle.descript}>{t("INDEX_STR02")}</p>
        <Slider className={defaultStyle.box} {...settings}>
          <BestProductItem lng={lng} productType="cloud">
            <dl>
              <dt>{t("CLOUD")}</dt>
              <dd dangerouslySetInnerHTML={{ __html: t("INDEX_STR03") }}></dd>
            </dl>
          </BestProductItem>
          <BestProductItem lng={lng} productType="web">
            <dl>
              <dt>{t("WEB_KEYWORD")}</dt>
              <dd dangerouslySetInnerHTML={{ __html: t("INDEX_STR04") }}></dd>
            </dl>
          </BestProductItem>
          <BestProductItem lng={lng} productType="solution">
            <dl>
              <dt>{t("SOLUTION_KEYWORD")}</dt>
              <dd dangerouslySetInnerHTML={{ __html: t("INDEX_STR05") }}></dd>
            </dl>
          </BestProductItem>
        </Slider>
      </div>
    </section>
  );
};

export default BestProduct;
