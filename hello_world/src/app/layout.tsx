import { Metadata } from "next"

export  const metadata:Metadata = {
  title: {
    default: "Next.js  -codevolution",
    template: "%s | Web development"

  },
  description: "Generated by Next.js"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{background:"blue",padding:"1rem",textAlign:"center"}}>
          Header
        </header>
        {children}
        <footer style={{background:"red",padding:"1rem",textAlign:"center"}} >
          footer
        </footer>
      </body>
    </html>
  )
}
