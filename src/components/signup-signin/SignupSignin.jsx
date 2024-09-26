import './signupsignin.css';
import { Input } from '../input/Input';
import { useState } from 'react';
import { Button } from '../custom-button/Button';

const SignupSignin = () => {
const [name, setName] =useState('');
const [email, setEmail] =useState('');
const [password, setPassword] =useState('');
const [comfirmPassword, setcomfirmPassword] =useState('');

  return (
    <div className='signup-wrapper'>
       <h2 className='title'>Sign Up or <span>Financy</span></h2>
    <div>
      <Input label={'Full Name'} state={name} setState={setName} placeholder={'John Doe'}type={'text'}/>
      <Input label={'email'} state={email} setState={setEmail} placeholder={'johndoe@gmail.com'}type={'email'}/>
      <Input label={'password'} state={password} setState={setPassword} placeholder={'example0q4w'}type={'password'}/>
      <Input label={'confir password'} state={comfirmPassword} setState={setcomfirmPassword} placeholder={'example0q4w'}type={'password'}/>
      <Button text={'Sign up with Password'}  />
    </div>
    
    </div>
  )
}

export default SignupSignin