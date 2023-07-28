'use client'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

const DetailDetail = (props: Props) => {
  const params = useParams()
  console.log(params);

  return (
    <div>

    </div>
  )
}

export default DetailDetail