import Footer from '@/components/Footer'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Wrapper({ children }: Props) {
  return (
    <div className="">
      {children}
      <Footer />
    </div>
  )
}
