import Head from 'next/head'
import Sidebar from '../components/Sidebar';

// interface Props {
//   tested: string[];
// }

// const Home = ({ tested }: Props) => {
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Twiter - test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <main className=''>
        <Sidebar />
        {/* {tested} */}
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export default Home

// test
// export const getServerSideProps = async () => {
//   const [
//     tested,
//   ] = await Promise.all([
//     fetch("http://localhost:3000/api/test").then((res) => res.json()),
//   ])

//   return {
//     props: {
//       tested: tested.name,
//     }
//   }
// }
