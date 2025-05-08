import { gql, useQuery } from '@apollo/client'

import type { Car } from '../../types/Car'

const useGetCars = () => {
  const query = gql`
    query getCars {
      data {
        licensePlate
      }
    }
  `

  return useQuery<Car[]>(query, {
    variables: {
      ownerid: 'toyota',
      projection: 'all',
      skip: 0,
      limit: 10
    }
  })
}

export default useGetCars