import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "모든 문서 포맷을 한 번에 | 폴라리스오피스",
  description: "HWP, PDF, MS OFFICE 등 모든 문서 포맷 호환, PC&모바일 구분 없이 언제 어디서나 만나는 오피스",
  openGraph: {
    title: "모든 문서 포맷을 한 번에 | 폴라리스오피스",
    images: `${process.env.NEXT_PUBLIC_STATIC_LINK}/web/resources/image/Link_bi.png`,
    url: `${process.env.NEXT_PUBLIC_URL}/ko/`,
    type: "website"
  },
  twitter: {
    images: `${process.env.NEXT_PUBLIC_STATIC_LINK}/web/resources/image/Link_bi.png`,
    title: "모든 문서 포맷을 한 번에 | 폴라리스오피스",
    site: "폴라리스오피스",
    description: "HWP, PDF, MS OFFICE 등 모든 문서 포맷 호환, PC&모바일 구분 없이 언제 어디서나 만나는 오피스",
    creator: "Polarisoffice"
  },
  themeColor: "#fff",
  formatDetection: {
    telephone: false,
    address: false,
    email: false
  },
  keywords:
    "폴라리스오피스, Polarisoffice, 오피스프로그램, 한글뷰어, 한글편집, hwp편집, hwpx편집, 문서뷰어, PDF뷰어, 워드, word, 엑셀, excel, ppt, powerpoint, 문서편집, 문서편집프로그램, ppt템플릿, hwp파일열기, 한글문서뷰어, 엑셀뷰어, 오피스뷰어, 워드뷰어, 파워포인트뷰어, hwpx뷰어, pptx뷰어, ppt뷰어, hwpx, pdf편집, 무료오피스",
  robots: "index, follow",
  viewport: {
    width: 1360,
    initialScale: 1.0,
    maximumScale: 2.0,
    minimumScale: 1.0
  },
  other: {
    "msapplication-TileColor": "#da532c",
    "facebook-domain-verification": "mz2z37ksfnrurdpdvykqar23shze5h"
  }
};
