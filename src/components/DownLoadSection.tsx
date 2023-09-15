import Image from "next/image";
import Link from "next/link";
import style from "styles/downloadSection.module.scss";
import { useTranslation } from "app/i18n";

type Props = {
  lng: string;
};

type InnerHTMLDdTagProps = {
  htmlString: string;
  imageName: string;
};

const InnerHTMLDdTag = ({ htmlString, imageName }: InnerHTMLDdTagProps) => {
  return (
    <>
      <dd dangerouslySetInnerHTML={{ __html: htmlString }}></dd>
      <Image
        className={style.img}
        src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/contents/ho/icon_${imageName}.svg`}
        alt="icon_arrow_right"
        width={189}
        height={146}
      />
    </>
  );
};

const DownLoadSection = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <section className={style.section}>
      <div className={`${style.inner} ${style.c1}`}>
        <Link href="/ko/download">
          <dl>
            <dt>Download</dt>
            <InnerHTMLDdTag htmlString={t("INDEX_STR06")} imageName="brochure_download" />
            <dd>
              <span>
                {t("KEYWORD_GO_TO")}
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_arrow_right.svg`}
                  alt="icon_arrow_right"
                  width={8}
                  height={12}
                />
              </span>
            </dd>
          </dl>
        </Link>
      </div>
      <div className={`${style.inner} ${style.c2}`}>
        <Link href="/ko/download">
          <dl>
            <dt>FAQ</dt>
            <InnerHTMLDdTag htmlString={t("INDEX_STR07")} imageName="faq" />

            <dd>
              <span>
                {t("AGREE_DETAIL")}
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_arrow_right.svg`}
                  alt="icon_arrow_right"
                  width={8}
                  height={12}
                />
              </span>
            </dd>
          </dl>
        </Link>
      </div>
    </section>
  );
};

export default DownLoadSection;
