import { GetServerSideProps } from 'next'

const News = () => {
  return <>News page</>;
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {}
  }
}

export default News;
  