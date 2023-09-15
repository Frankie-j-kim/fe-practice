import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "styles/main.module.scss";
import { useTranslation } from "app/i18n";
import MenuButton from "./MenuButton";

type Props = {
  lng: string;
};

const Header = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "common");
  return (
    <header className={style.header}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/logo/logo_pc.svg`}
        width={182}
        height={31}
        alt="main-logo"
      />
      <nav>
        <Link className={style.current} href="/product">
          {t("KEYWORD_PRODUCT")}
        </Link>
        <Link className={style.current} href="/store">
          {t("STORE_TITLE")}
        </Link>
        <Link className={style.current} href="/download">
          {t("KEYWORD_DOWNLOAD")}
        </Link>
        <Link className={style.current} href="/support">
          {t("INQUIRE")}
        </Link>
        <Link className={style.current} href="/event">
          {t("KEYWORD_EVENT")}
        </Link>
      </nav>
      <div className={style.util}>
        <div className="pso">
          <Link href="http://bit.ly/3jfhvPu" target="_blank">
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/banner_newsletter.gif`}
              alt="banner_newsletter"
              width={159}
              height={30}
            />
          </Link>
        </div>
        <Link href="/list" className="ico">
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_order_inquiry_nomral.svg`}
            alt="icon_order_inquiry_nomral"
            width={30}
            height={24}
          />
          {t("ORDERINQUERY_ORDERCONFIRM")}
        </Link>
        <Link className={style.login} href="/sign-in">
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_login_normal.svg`}
            alt="icon_login_normal"
            width={30}
            height={24}
          />
          {t("KEYWORD_LOGIN")}
        </Link>
        <Link className={style.join} href="/sign-up">
          {t("REGIST_TITLE")}
        </Link>
        <MenuButton>
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_menu_normal.svg`}
            alt="icon_menu_normal"
            width={32}
            height={32}
          />
        </MenuButton>
      </div>
    </header>
  );
};

export default Header;
