import { useCallback, useState, type FunctionComponent } from "react"
import type { UseQueryResult } from "@tanstack/react-query"

import useGetCars from "../../store/cars/useGetCars"
import CarItem from "../car-item/CarItem"
import type { Car } from "../../types/Car"

import styles from './CarList.module.css'

const List = () => {
  const [page, setPage] = useState(0)
  const query = useGetCars(page)
  const { isSuccess } = query

  const goToPrevPage = useCallback(() => {
    setPage(prev => prev <= 0 ? 0 : prev - 1)
  }, [setPage])
  const goToNextPage = useCallback(() => {
    setPage(prev => prev + 1)
  }, [setPage])

  return (
    <>
      <ListData query={query} />

      <div className={styles.buttons}>
        <button onClick={goToPrevPage} disabled={!isSuccess || page <= 0}>Prev</button>
        <span>{page + 1}</span>
        <button onClick={goToNextPage} disabled={!isSuccess}>Next</button>
      </div>
    </>
  )
}

const ListData: FunctionComponent<{ query: UseQueryResult<Car[], Error> }> = ({ query }) => {
  const { data, isLoading, isError, error } = query

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