import Image from "next/image";
import Link from "next/link";
import style from "styles/main.module.scss";
import { useTranslation } from "app/i18n";
import MenuButton from "./MenuButton";

type Props = {
  lng: string;
};

const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "common");
  const type = process.env.NEXT_PUBLIC_STATIC_LINK;
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <div className={style.flx}>
          <dl>
            <dt>Follow us</dt>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice">
                <Image
                  src={`${type}/web/assets/img/common/sns_facebook.svg`}
                  alt="sns_facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </dd>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/sns_blog.svg`}
                  alt="sns_facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </dd>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/sns_youtube.svg`}
                  alt="sns_facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </dd>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/sns_insta.svg`}
                  alt="sns_facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </dd>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/sns_kakao.svg`}
                  alt="sns_facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </dd>
            <dd>
              <Link href="http://www.facebook.com/Polarisoffice" className={style.news_letter}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/newsletter.svg`}
                  alt="newsletter"
                  width={40}
                  height={40}
                />
                뉴스레터 구독하기
              </Link>
            </dd>
          </dl>
          <MenuButton>
            메뉴 전체 보기{" "}
            <Image
              src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_menu_normal.svg`}
              alt="icon_menu_normal"
              width={32}
              height={32}
            />
          </MenuButton>
        </div>
      </div>
      <div className={style.inner}>
        <div className={style.flx}>
          <ul className={style.info}>
            <li>
              <Link href="https://www.polarisofficecorp.com/" target="_blank" rel="noreferrer">
                <strong>{t("COMPANY_INTRODUCE")}</strong>
              </Link>
            </li>
            <li>
              <Link href="https://www.polarisofficecorp.com/#main-sec022" target="_blank" rel="noreferrer">
                {t("BUSINESS_KEYWORD")}
              </Link>
            </li>
            <li>
              <Link href="https://www.polarisofficecorp.com/news-2/" target="_blank" rel="noreferrer">
                {t("NOTICE_KEYWORD")}
              </Link>
            </li>
            <li>
              <a href="https://www.polarisofficecorp.com/recruiting/#apply-sec01" target="_blank" rel="noreferrer">
                {t("RECRUITING_KEYWORD")}
              </a>
            </li>
            <li className="global">
              <Link href="/ko/affiliate">
                <strong>{t("AFFILIATE_PROGRAM")}</strong>
              </Link>
            </li>
            <li>
              <Link href="/ko/partners">
                <strong>{t("PARTNERS")}</strong>
              </Link>
            </li>
            <li>
              <Link href="/ko/terms">
                <strong>{t("PRIVICY_TITLE")}</strong>
              </Link>
            </li>
            <li>
              <Link href="/ko/privacy" className="privacy">
                <strong>{t("TITLE_PRIVACYPOLICY")}</strong>
              </Link>
            </li>
          </ul>
          <div className="etc">
            <div className={`${style.select_list} ${style.f1}`}>
              <button className={style.fm_toggle}>
                {t("SELECT_LANGUAGE")}
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_plus.svg`}
                  alt="icon_menu_normal"
                  width={16}
                  height={16}
                />
              </button>
            </div>

            <div className={`${style.select_list} ${style.f2}`}>
              <button className={style.fm_toggle}>
                Family Site
                <Image
                  src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/icon_plus.svg`}
                  alt="icon_menu_normal"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>

        <div className={style.prv}>
          <div className={style.flx}>
            <p>
              <strong>Polaris&nbsp;Office Corp.</strong>
              <br />
              주소: 서울특별시 구로구 디지털로31길 12, 15층(구로동) | 대표이사: 지준경 <br />
              사업자등록번호: 220-81-43747{" "}
              <Link href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208143747" target="_blank" rel="noreferrer">
                <span>사업자정보확인</span>
              </Link>{" "}
              | 통신판매업 신고 번호: 제2017-서울금천-0475호 | 개인정보보호책임자: 이해석
              <br />
              통신판매업 신고 번호 : 제2017-서울금천-0475호
            </p>
            <ul className={style.ce_list}>
              <li className="c4">
                <Link href="https://polaris-office.software.informer.com/" target="_blank">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/certiimg04.png`}
                    alt="software.informer"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li className="c1">
                <Link href="https://reviews.financesonline.com/p/polaris-office-2017" target="_blank">
                  <Image
                    src={`${type}/web/assets/img/common/certiimg01.png`}
                    alt="verified quality"
                    width={104}
                    height={40}
                  />
                </Link>
              </li>
              <li className="c2">
                <Link
                  href="https://www.softpedia.com/get/Office-tools/Office-suites/Polaris-Office.shtml"
                  target="_blank">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STATIC_LINK}/web/assets/img/common/certiimg02.png`}
                    alt="softpedia"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li className="c3">
                <Link href="https://www.swit.or.kr/IS/web/index.jsp" target="_blank">
                  <Image src={`${type}/web/assets/img/common/certiimg03.png`} alt="swit" width={65} height={40} />
                </Link>
              </li>
            </ul>
          </div>
          <p>
            <strong>고객지원</strong>
            <br />
            제품관련문의 : 1566-1102(평일 10:00~18:00 | 휴게시간 12:30~13:30)
            <br />
            Email : support@polarisoffice.com
          </p>
        </div>
        <p className={style.copyright}>Copyright Polaris Office Corp. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
