import { GetServerSideProps } from 'next'
import { getData } from '../../lib/api';
import React, { useEffect, useState } from 'react';

type ConfigProps = {
  fields: any,
  sys: any,
  metadata: any
}

const News = () => {
  const [config, setConfig] = useState<ConfigProps | undefined>()
  useEffect(() => {
    const getCofigs = async () => {
      const {items} = await getData({contentType: "newsConfig"})
      console.log(items[0])
      if (items.length) setConfig(items[0])
    }
    getCofigs()
  }, [])
  return (<>News page</>);
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {}
  }
}

export default News;
  