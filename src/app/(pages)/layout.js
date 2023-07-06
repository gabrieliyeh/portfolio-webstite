import './globals.css'

export const metadata = {
  title: 'Gabriel - Developer',
  description: 'On my portfolio page, you can see my creative work and Frontend Engineering abilities. See how I approach web development and demonstrate my interest in programming. Please contact me to discuss how I may assist you with your frontend development requirements.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
      <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
      as='font'
    />
      </head>
      <body>
        <main>
        {children}
        </main>
      </body>
    </html>
  )


  
}
