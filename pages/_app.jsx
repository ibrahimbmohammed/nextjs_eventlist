import React,{useState} from 'react';
import '../styles/globals.css'
import {ThemeWrapper} from '../utils/theme-context';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeWrapper>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeWrapper>
  )
}

export default MyApp
