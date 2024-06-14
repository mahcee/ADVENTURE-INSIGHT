import Footer from "../components/Footer";
import Nav from "../components/Nav";
function Layout({children}){
  return(
<div>
    <Nav />
    <main className="min-h-[100vh]">
  
      {children}
    </main>
  
    <Footer />
  </div>
  );
  
}

export default Layout;