import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'
import { STORAGE_KEY } from '../../config/auth'
import Initial from './_Content-Initial';
import Depoiments from './_Depoiments';
import Institutions from './_Institutions';
import Campaigns from './_Campaigns';
import About from './_About';
import Footer from '../../components/Footer';


function Main() {
  const history = useHistory(null)
  
  useEffect(() => {
    const acess = localStorage.getItem(STORAGE_KEY)
    acess ? history.push("/Home") : history.push("/")
  })

  return (
    <>
      <div className="container-initial">
        <Initial />
        <Campaigns />
        <Depoiments />
        <Institutions />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Main