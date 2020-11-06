import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import Initial from './_Initial';
import Depoiments from './_Depoiments';
import Institutions from './_Institutions';
import Campaigns from './_Campaigns';
import About from './_About';
import Footer from '../../components/Footer';


function Main() {
  const history = useHistory(null)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      history.push("/Home")
    }
  }, [history])

  return (
    <>
      <Initial />
      <Campaigns />
      <Depoiments />
      <Institutions />
      <About />
      <Footer />
    </>
  );
}

export default Main