import "../styles/common.scss";
import { languages } from "app/i18n/settings";

type Props = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng}>
      <body>{children}</body>
    </html>
  );
}
