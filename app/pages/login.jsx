import React from 'react'
import { Button, Checkbox, Label, TextInput } from '~/flowbite-react.module';
import { HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';
import logo from '../../public/assets/images/Logo_DNBS.jpeg'
import { Form, useNavigation } from '@remix-run/react';
import ButtonComponent from '../components/button';

const LoginPage = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state !== 'idle'
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
            <img
              className="mx-auto h-20 w-auto"
              src={logo}
              alt=""
            />
            <h1 className='text-center font-bold text-xl'>
              Login Siakad
            </h1>
            <Form method='post' className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                    <Label htmlFor="username" value="Username" />
                </div>
                <TextInput id="username" name='username' type="text" required icon={HiOutlineUser}/>
              </div>

              <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
                </div>
                <TextInput id="password" name='password' type="password" required icon={HiOutlineLockClosed}/>
              </div>
              {/* <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
              </div> */}
              <ButtonComponent
                isProcessing={isSubmitting}
                disabled={isSubmitting}
                type="submit"
              >
                Masuk
              </ButtonComponent>
            </Form>
        </div>
    </div>
  )
}

export default LoginPage