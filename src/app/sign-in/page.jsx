"use client"
import {useState,useEffect} from 'react'
import { SignIn } from '@/components/ui-kit/signin'

export default function page() {
  useEffect(() => {
    document.body.classList.add("signin-page");
    return () => document.body.classList.remove("signin-page");
  }, []);
  return (
    <div>
      <SignIn/>
    </div>
  )
}
