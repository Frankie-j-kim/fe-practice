import Image from "next/image";
import React from "react";
import Slider from "components/Slider";

import style from "styles/blog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IRespone {
  blogBanners: IBanner[];
  detail: null;
  resultCode: number;
  resultMsg: string;
}

interface IBanner {
  imagePath: string;
  linkUrl: string;
}
const getBlogList = async (lng: string): Promise<IRespone> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/1/blogbanner/list`, {
    method: "POST",
    body: JSON.stringify({
      language: lng,
      status: "ACTIVE"
    })
  });
  return res.json();
};

const Blog = async ({ lng }: { lng: string }) => {
  const { blogBanners } = await getBlogList(lng);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={style.view}>
      <div className={style.inner}>
        <h2 className={style.headline}>{"Blog"}</h2>
        <p className={style.descript}>{"폴라리스 오피스의 다양한 활용 방법과 새로운 소식을 확인해보세요."}</p>
        <a href="https://blog.naver.com/polarisoffice_kr" className={style.btn}>
          <span>{"view ALL"}</span>
        </a>
        <Slider {...settings} className={style.slider}>
          {blogBanners.map((banner, index) => {
            return (
              <div key={index} className={style.inner}>
                <a href={banner.linkUrl} className={style.blod_report}>
                  <Image src={banner.imagePath} alt={"button-image"} width={310} height={310} />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Blog;

const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={onClick} className={style.next_arrow}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/common-icon-arrow.svg`}
        alt={"button-image"}
        width={24}
        height={24}
      />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div onClick={onClick} className={`${style.prev_arrow} ${style.arrow_btn}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/common-icon-arrow.svg`}
        alt={"button-image"}
        width={24}
        height={24}
      />
    </div>
  );
};
