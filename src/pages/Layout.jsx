import Footer from "../components/Footer";
import Nav from "../components/Nav";
      <Nav />
      <main className="min-h-[100vh]">

        {children}
      </main>

      <Footer />
    </div>
  );
}
export default Layout;