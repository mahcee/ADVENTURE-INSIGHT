


function Footer() {
    return (
      <footer className="bg-[linear-gradient(90deg,#004aad,#5de0e6)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
            <img src="src/assets/images/logo-removebg-preview.png" className="w-[250px]"/>

              <p>A brief description of the company and its services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white]">
                Quick Links
              </h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/allagencies">AllTravelAgencies</a>
                </li>
                <li>
                  <a href="/allblogs">Allblogs</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <p>Email: info@adventureInsight.com</p>
              <p>Phone:+254 743678909</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} AdventureInsight. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  export default Footer;

