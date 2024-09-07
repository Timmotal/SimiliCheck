

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="icon"
          href="../../public/footer-icons/recode-circle.png"
          sizes="any"
        />
        {children}
      </body>
    </html>
  );
}
