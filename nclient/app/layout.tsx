import "../styles/globals.css";
import UserContextProvider from "../context/userContextProvider";
import Navbar from "./Navbar";
import Footer from "./footer";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body>
        <UserContextProvider>
           <Navbar/>
          {children}
          <footer></footer>
          </UserContextProvider>
      </body>
    </html>
  );
}
