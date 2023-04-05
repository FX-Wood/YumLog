import './globals.css'

export const metadata = {
  title: 'YumLog',
  description: 'Track your Yum',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* see https://mui.com/material-ui/getting-started/installation/ */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {/* see https://mui.com/material-ui/getting-started/usage/ */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  )
}
