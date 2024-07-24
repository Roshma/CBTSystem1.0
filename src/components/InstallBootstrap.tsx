"use client"
import React, { useEffect } from 'react'

const InstallBootstrap = () => {
  
    useEffect(()=> {
        //@ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.js");
      }, []);
  
    return (
    <></>
  )
}

export default InstallBootstrap