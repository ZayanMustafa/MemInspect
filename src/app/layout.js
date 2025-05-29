import Navbar from '@/component/Navbar'
import './globals.css'
import { Inter, Nabla } from 'next/font/google'
import Footer from '@/component/Footer'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MEM INSPECT',
  description: 'Get professional vehicle inspection reports with our certified inspectors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="select-none min-h-screen">
          
          {children}
            {/* Tawk.to Script */}
        <Script strategy="lazyOnload" id="tawk-to">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/68062aa06d34aa190b0564a3/1ipc1d1rr';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        </main>
      </body>
    </html>
  )
}