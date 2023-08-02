import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReduxProvider from "./redux/provider";

export const metadata = {
  title: "Abdelnour Hamadache",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
