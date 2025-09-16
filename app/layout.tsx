import BotNav from "@/components/layout/BotNav/BotNav";
import { ThemeProvider } from "@/components/layout/Theme/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

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
