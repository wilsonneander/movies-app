import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { ModalProvider } from './context/modal-context'
import MovieModal from './components/MovieModal/movie-modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies App',
  description: 'A simple movies app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={inter.className}>
        <ModalProvider>
          <MovieModal />
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
