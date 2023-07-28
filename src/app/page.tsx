import Banner from '@/components/client/banner'
import Carousel from '@/components/client/carousel'
import Image from 'next/image'
import { useEffect } from 'react'

export default async function Home() {
  async function getProducts() {
    const res = await fetch('http://localhost:3001/products')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getProducts()
  return (
    <>
      <div> 
        {data && data.map((item: { id: number, name: string }, index: any) => (
          <h1>
            {item.name}
          </h1>
        ))}
      </div>
      <Banner />
      {/* <Carousel /> */}
    </>
  )
}
