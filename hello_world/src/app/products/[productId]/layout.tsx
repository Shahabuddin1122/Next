export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <h1>nested layout features</h1>
          {children}
        </>
    )
  }