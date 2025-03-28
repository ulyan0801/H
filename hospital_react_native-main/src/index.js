import React from 'react'
import MainTab from './routes'

export default function index() {
  return (
    <>
    {/* if (storage) {
      storage.load({
        key: 'userData',
        autoSync: false,
        syncInBackground: false,
      }).then(res => {
        if (!res.patientId) {
          <LoginPage/>
        }else{
          <MainTab />

        }
      })
    } */}
    <MainTab />
    </>
  )
}