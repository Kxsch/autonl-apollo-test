import useGetCars from "../../store/cars/useGetCars"

const List = () => {
  const { data, loading, error,  } = useGetCars()

  if (loading) return (
    <p>Loading...</p>
  )

  if (error) return (
    <>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
    </>
  )

  return (
    <>
      <div>{data.length}</div>
      <ul>
        {data.map((car) => (
          <li>{car.licensePlate}</li>
        ))}
      </ul>
    </>

  )
}

export default List