import { GetServerSideProps } from 'next'

const NewsDetailPage = () => {
  return <>News details page</>;
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {}
  }
}

export default NewsDetailPage;