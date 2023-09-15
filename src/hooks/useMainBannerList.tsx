import { useEffect, useState } from "react";

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
interface Props {
  lng: string;
}

const useMainBannerList = ({ lng }: Props) => {
  const [mainBanners, setMainBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/1/rollingbanner/list`, {
      method: "POST",
      body: JSON.stringify({
        language: lng,
        status: "ACTIVE"
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setMainBanners(data.rollingBanners);
      });
  }, [lng]);

  return { mainBanners };
};

export default useMainBannerList;
