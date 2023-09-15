import Image from "next/image";
import React from "react";
import Slider from "components/Slider";

import style from "../styles/mainBanner.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface IBanner {
  backgroundUrl: string;
  backgroundColor: string;
  subText: string;
  subTextColor: string;
  mainText: string;
  mainTextColor: string;
  linkText: string;
  linkUrl: string;
  linkBackgroundColor: string;
  iconUrl: string;
}
const getBannerList = async (lng: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/1/rollingbanner/list`, {
    method: "POST",
    body: JSON.stringify({
      language: lng,
      status: "ACTIVE"
    })
  });
  return res.json();
};

const MainBanner = async ({ lng }: { lng: string }) => {
  // const { mainBanners } = useMainBannerList({ lng });
  const { rollingBanners } = await getBannerList(lng);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dotsClass: style.slick_dots,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const parseHTMLString = (htmlString: string) => {
    return { __html: htmlString.replace(/<br\s*\/?>/gi, "<br>") };
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
        {rollingBanners.map((banner: IBanner, index: number) => {
          return (
            <div key={index} className={style.slider}>
              <Image
                src={banner.backgroundUrl}
                alt="banner"
                fill
                quality={100}
                style={{ backgroundColor: banner.backgroundColor, objectFit: "cover" }}
              />
              <div className={style.inner}>
                <div className={style.slogan}>
                  <p className={style.txt01} style={{ color: banner.subTextColor }}>
                    {banner.subText}
                  </p>
                  <p
                    className={style.txt02}
                    style={{ color: banner.mainTextColor }}
                    dangerouslySetInnerHTML={parseHTMLString(banner.mainText)}
                  />
                  <div className={style.btn_box}>
                    <a
                      href={banner.linkUrl}
                      className={style.btn}
                      style={{ backgroundColor: banner.linkBackgroundColor }}>
                      <span className={style.arrow}>
                        {banner.linkText}
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_arrow_right.svg`}
                          alt="arrow"
                          width={8}
                          height={12}
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className={style.img}>
                  <Image src={banner.iconUrl} alt={"banner"} width={557} height={374.23} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainBanner;

const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={onClick} className={style.next_arrow}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/slide-icon-arrow.svg`}
        alt={"button-image"}
        width={44}
        height={44}
      />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={onClick} className={style.prev_arrow}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/slide-icon-arrow.svg`}
        alt={"button-image"}
        width={44}
        height={44}
      />
    </div>
  );
};
