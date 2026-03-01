import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Users = () => {
  return (
    <>
      <div>Ini halaman Dashboard Users</div>
      <ul className='mt-10'>
        <li><Link href="/dashboard/users/1" >User 1</Link></li>
        <li><Link href="/dashboard/users/2" >User 2</Link></li>
        <li><Link href="/dashboard/users/3" >User 3</Link></li>
      </ul>
      <Button variant={'outline'} size={'xxl'}> Click Me</Button>
    </>
  )
}

export default Users