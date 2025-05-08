import useGetCars from "../../store/cars/useGetCars"
import CarItem from "../car-item/CarItem"

import styles from './CarList.module.css'

const List = () => {
  const { data, isError, error, isLoading } = useGetCars()

  if (isLoading) return (
    <p>Loading...</p>
  )

  if (isError) return (
    <>
      <p>Something went wrong</p>
      <p>{error.message}</p>
    </>
  )

  if (!data || data.length === 0) return (
    <p>No data found</p>
  )

  return (
    <ul className={styles.carList}>
      {data.map((car) => (
        <li key={car.id.carId}>
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  )
}

export default List