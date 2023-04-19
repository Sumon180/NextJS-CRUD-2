import { FiUserPlus } from 'react-icons/fi';
import { Inter } from 'next/font/google'
import Table from '@/components/Table';
import Form from '@/components/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChangeAction } from '@/redux/reducer';



export default function Home() {

  const visible = useSelector((state: any) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())
  }


  return (
    <main className='py-5'>
      <h1 className='text-xl md:tex-5xl text-center font-bold py-10'>Employee Management</h1>

      <div className='container mx-auto flex justify-between py-5 border-b'>
        <div className='left flex gap-3'>
          <button onClick={handler} className="btn btn-primary">Add Employee <span className='px-2'> <FiUserPlus size={20} /></span></button>
        </div>
      </div>

      {visible ? <Form></Form> : <></>}

      <div className='container mx-auto'>
        <Table></Table>
      </div>
    </main>
  )
}
