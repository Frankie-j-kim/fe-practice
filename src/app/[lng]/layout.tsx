import { ReactNode } from "react";
import type { Metadata } from "next";
import { dir } from "i18next";
import { useTranslation } from "app/i18n";
import { languages } from "app/i18n/settings";
import { metadata } from "utils/meta-core";
import StoreProvider from "./store-provider";
type Props = {
  children: ReactNode;
  params: {
    lng: string;
  };
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }: Omit<Props, "children">): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "common");

  return {
    ...metadata,
    description: t("HOME_DESCRIPTION_META"),
    keywords: t("HOME_DESCRIPTION_META")
  };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
