import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
export default Layout;