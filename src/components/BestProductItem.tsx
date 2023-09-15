import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "app/i18n/client";
import style from "styles/bestProduct.module.scss";
type Props = {
  productType: "cloud" | "web" | "solution";
  children: React.ReactNode;
  lng: string;
};

type Button = {
  type: "personal" | "company";
  btnName: {
    personal: string;
    company: string;
  };
};

const RoundButton = ({ type, btnName: { personal, company } }: Button) => {
  const baseIconUrl = `${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common`;
  const iconUrl =
    type === "company" ? `${baseIconUrl}/common-icon-enterprise.svg` : `${baseIconUrl}/common-icon-home.svg`;

  return (
    <Link className={style.btn} href={type === "company" ? "/business/office" : "/personal/office"}>
      <Image src={iconUrl} width={24} height={24} alt={`${type}-icon`} />
      <span>{type === "company" ? company : personal}</span>
      <Image src={`${baseIconUrl}/icon_arrow_right.svg`} width={8} height={12} alt={`${type}-icon`} />
    </Link>
  );
};

const BestProductItem = ({ productType, children, lng }: Props) => {
  const { t } = useTranslation(lng, "common");
  const btnTitle = {
    personal: t("PERSONAL"),
    company: t("BUSINESS")
  };
  const backgroundImageBaseUrl = `${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/img_${productType}.jpg`;
  return (
    <div className={style.sb}>
      <Image
        src={backgroundImageBaseUrl}
        alt={productType}
        fill
        quality={100}
        sizes="10%"
        style={{ objectFit: "cover" }}
      />
      <div className={style.img}>
        {productType === "cloud" && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_po_circle.svg`}
            width={48}
            height={48}
            alt="po_circle"
          />
        )}
        {productType === "web" && (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_slide_circle.svg`}
              width={48}
              height={48}
              alt="slide_circle"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_sheet_circle.svg`}
              width={48}
              height={48}
              alt="sheet_circle"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_word_circle.svg`}
              width={48}
              height={48}
              alt="word_circle"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_hwp_circle.svg`}
              width={48}
              height={48}
              alt="hwp_circle"
            />
          </>
        )}
      </div>
      {children}
      <div className={style.btn_box}>
        {productType === "cloud" && (
          <>
            <RoundButton btnName={btnTitle} type="personal" />
            <RoundButton btnName={btnTitle} type="company" />
          </>
        )}
        {productType === "web" && <RoundButton btnName={btnTitle} type="personal" />}
        {productType === "solution" && <RoundButton btnName={btnTitle} type="company" />}
      </div>
    </div>
  );
};

export default BestProductItem;
