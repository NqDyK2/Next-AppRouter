'use client'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}


const HomeDetail = async (props: Props) => {
  async function getProducts() {
  const params = useParams()
    const res = await fetch(`http://localhost:3001/products/${params.id}`)
    try {
      return res.json()
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  const data = await getProducts()

  return (
    <div>
      {data.id} {data.name}
    </div>
  )
}

export default HomeDetail