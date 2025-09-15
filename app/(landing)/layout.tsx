import Footer from "@/components/layout/Footer/Footer";
import TopNav from "@/components/layout/TopNav/TopNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col relative'>
      <TopNav />
      <div className=''>{children}</div>

      <Footer />
    </section>
  );
}
