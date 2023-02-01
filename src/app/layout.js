import './globals.css'
import Navigation from '@/components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-zinc-900 container mx-auto p-4'>
        <div className="flex flex-col gap-4">
          <Navigation />
          <div className="bg-zinc-800 border-2 border-zinc-700 rounded-lg width-full p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
