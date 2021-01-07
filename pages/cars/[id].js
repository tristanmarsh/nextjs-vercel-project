import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Car({ car }) {
  const router = useRouter()
  const { id } = router.query

  const queryParams = Object.entries(router.query)

  return (
    <>
      <Head>
        <title>
          {car?.color} {car?.id}
        </title>
      </Head>

      <h4>
        <Link href="/cars">⬅️ Back</Link>
      </h4>

      <h1>{id}</h1>

      <img src={car?.image} />

      <h3>Query Paramaters</h3>
      <ul>
        {queryParams?.map((x) => (
          <li>
            {x[0]}: {x[1]}
          </li>
        ))}
      </ul>
    </>
  )
}

// export async function getStaticProps({ params }) {
//   if (params) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json()

//     return {
//       props: { car: data }
//     }
//   }
// }

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/api/cars/${params.id}`)
  const data = await req.json()

  return {
    props: {
      car: data,
    },
  }
}

// export async function getStaticPaths() {
//   const req = await fetch(`http://localhost:3000/cars.json`);
//   const data = await req.json()

//   const paths = data.map(car => (
//     {
//       params: {
//         id: car
//       }
//     }
//   ))

//   return {
//     paths,
//     fallback: false
//   }
// }
