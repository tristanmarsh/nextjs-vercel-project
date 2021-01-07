import Head from 'next/head'
import Link from 'next/link'

export default function CarsList({ cars }) {
  return (
    <>
      <Head>
        <title>Cars List</title>
      </Head>

      <h1>Cars List</h1>

      <ul>
        {cars?.map((car) => (
          <Link key={car.id} href={`cars/${car.id}`}>
            <li key={car.id}>
              {car.id} {car.color}
              <img src={car.image} width="300px" />
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const req = await await fetch('http://localhost:3000/api/cars')
  const cars = await req.json()

  return {
    props: {
      cars,
    },
  }
}
