import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const { params } = router.query

  console.log(params)

  return (
    <div>
      <h1>Note: {params}</h1>
    </div>
  );
}

export default Page
