'use client'

import { useEffect } from 'react'
import { db } from '../lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { getCities } from '../lib/firebase'

export default function Home() {

  // DATABASE TESTING
  useEffect(() => {
    getCities(db);
  }, [])

  return (
    <div>
      <h1 className='text-xl'>Home</h1>
    </div>
  )
}
