'use client'
import React, { useState } from 'react'
import Input from '@/app/components/ui/Input'
import Button from '@/app/components/ui/Button'
import axios from 'axios'

export default function Form() {
  const [submited, setSubmited] = useState(false) 
  const [form, setForm] = useState({
    name: '',
    city: '',
    state: '',
    phoneNumber: '',
    email: ''
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmited(true)
    console.log('Submit')
    // try {
    //   const res = await axios.post('https://example.com/api/form', form);
    //   console.log('Send success', res.data);

    // } catch (error) {
    //   console.error('Error', error);
    // }
  }

  console.log(submited)

  return (
    <div className='md:w-[670px] shadow-[0px_7px_14px_0px_rgba(110,183,194,0.37)] h-fit bg-white'>
      <div className='bg-black font-medium md:bg-[#545253] text-[18px] text-white pt-[15px] pb-[16px] pl-[23.75px] pr-[21.77px] flex flex-col md:items-center'>
        <span className='text-center'>Enter to win a 3rd generation Nest</span>
        <span className='text-center'>Learning Thermostat worth $249.</span>
      </div>
      <form action="" onSubmit={handleSubmit} className='pt-[15px] pb-[22px] md:pb-27px md:pt-[29px] px-6 md:px-[55px] flex flex-col items-center'>
        <Input
          placeholder="Name"
          onChange={handleChangeForm}
          type="text"
          required
          minLength={2}
        />
        <div className='flex flex-wrap w-[100%] justify-between'>
          <div className='w-[66.3%]'>
            <Input
              placeholder="City"
              type="text"
              onChange={handleChangeForm}
            />
          </div>
          <div className='w-[28%]'>
            <Input
              placeholder="State"
              type="text"
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <Input
          placeholder="Phone Number"
          type="number"
          required
          onChange={handleChangeForm}
        />
        <Input
          placeholder="Email Address"
          type="email"
          required
          onChange={handleChangeForm}
        />
        <div className='md:w-[333.61px] w-full'>
          <Button text="Enter to win" disabled={submited} disabledText="Submitted" />
        </div>
      </form>
    </div>
  )
}
