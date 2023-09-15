import { useEffect, useState } from "react";

interface IBanner {
  imagePath: string;
  linkUrl: string;
}
interface Props {
  lng: string;
}

const useBlogBannerList = ({ lng }: Props) => {
  const [blogBanners, setBlogBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/1/blogbanner/list`, {
      method: "POST",
      body: JSON.stringify({
        language: lng,
        status: "ACTIVE"
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogBanners(data.blogBanners);
      });
  }, [lng]);

  return { blogBanners };
};

export default useBlogBannerList;
