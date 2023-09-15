import Image from "next/image";
import React from "react";
import style from "styles/information.module.scss";
import { useTranslation } from "app/i18n";

type Props = {
  lng: string;
};

const Information = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "common");
  return (
    <section className={style.information}>
      <div className={style.view_default}>
        <div className={style.ho_004}>
          <h2 className={style.headline}>{t("INDEX_STR08")}</h2>
          <p className={style.descript}>{t("INDEX_STR09")}</p>
          <div className={style.trophy}>
            <ul>
              <li>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_prize.png`}
                  alt="icon_prize"
                  width={109}
                  height={88}
                />
                <strong>{t("INDEX_STR10")}</strong>
              </li>
              <li>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_playstore.png`}
                  alt="icon_playstore"
                  width={109}
                  height={88}
                />

                <strong dangerouslySetInnerHTML={{ __html: t("INDEX_STR11") }}></strong>
              </li>
              <li>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_appstore.png`}
                  alt="icon_appstore"
                  width={109}
                  height={88}
                />

                <strong dangerouslySetInnerHTML={{ __html: t("INDEX_STR12") }}></strong>
              </li>
              <li>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/logo_dnvgl.png`}
                  alt="logo_dnvgl"
                  width={109}
                  height={88}
                />
                <strong>{t("INDEX_STR13")}</strong>
                <p dangerouslySetInnerHTML={{ __html: t("INDEX_STR14") }}></p>
              </li>
              <li>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/logo-isms.png`}
                  alt="logo-isms"
                  width={109}
                  height={88}
                />
                <strong>{t("INDEX_STR15")}</strong>
                <p>{t("INDEX_STR16")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
