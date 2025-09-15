import { ThemeProvider } from "@/components/layout/Theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav/TopNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import BotNav from "@/components/layout/BotNav/BotNav";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "پلی ترید | Poly Trade",
  description: "اولین پلتفرم آموزش جامع از هوش مالی تا الگوریتمیک تریدینگ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='fa'
      suppressHydrationWarning
      suppressContentEditableWarning
      dir='rtl'
    >
      <head>
        <meta name='apple-mobile-web-app-title' content='Poly Trade' />
      </head>
      <body className='bg-black'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          forcedTheme='dark'
        >
          <SidebarProvider>
            <main>
              {children}
            </main>
            <BotNav
              items={[
                { label: "خانه", href: "/", iconName: "home" },
                {
                  label: "قیمت گذاری",
                  href: "/pricing",
                  iconName: "coins",
                },
                { label: "بلاگ", href: "/blog", iconName: "book" },
                {
                  label: "تماس با ما",
                  href: "/contact",
                  iconName: "phone",
                },
              ]}
            />

            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
