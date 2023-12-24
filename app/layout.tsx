import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from  "@/components/main/Navbar"
import Footer from  "@/components/main/Footer"  // Corregir aquí

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {  // Corregir aquí
  title: 'Coffee Shop',
  description: 'Coffee Shop',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return(
    <html lang="en">
      <body className={`${inter.className} bg-[#1d2503] overflow-y-scroll overflow-x-hidden`}>
        
        <Navbar/>
        {children}
        <Footer/>  
      </body>
    </html>
  )
}
