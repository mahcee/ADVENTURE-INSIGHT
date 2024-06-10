import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layout({ children }) {
  return (
    <div className="bg-[linear-gradient(#DA6B3B,#fff)] min-h-screen">
      <Nav />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
export default Layout;