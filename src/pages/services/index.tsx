import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../_app';

function index() {

  const { toggleMenu } = useContext(GlobalStoreContext);

  useEffect(() => {
    toggleMenu(false);
   }, [])

  return (
    <main>
      <h2>Services</h2>
    </main>
  )
}

export default index
