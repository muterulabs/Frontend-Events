import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#F8F8F8] dark:bg-[#0D0D0D] text-[#0A0A0A] dark:text-white antialiased "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
