import React from 'react';
import './styles.css'
import Initial from './_Initial';
import Depoiments from './_Depoiments';
import Institutions from './_Institutions';
import Campaigns from './_Campaigns';
import About from './_About';
import Footer from '../../components/Footer';


function Main() {

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