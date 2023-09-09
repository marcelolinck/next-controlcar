import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={`
      flex  h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600`}>
        <span className=''>Texto</span>
      </div>
  )
}
