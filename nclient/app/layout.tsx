import "../styles/globals.css";
import  UserContextProvider from "../context/userContextProvider";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          {children}
          </UserContextProvider>
      </body>
    </html>
  );
}
