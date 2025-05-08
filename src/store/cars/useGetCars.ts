import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import type { Car } from '../../types/Car'

const ITEMS_PER_PAGE = 10

const useGetCarsQueryKey = (page: number) => {
  return useMemo(() => ['cars', page], [page])
}

const useGetCars = (page: number) => {
  const queryKey = useGetCarsQueryKey(page)
  const skip = ITEMS_PER_PAGE * page

  return useQuery<Car[]>({
    queryKey,
    queryFn: async () => {
      const response = await fetch(`https://whitelabel.auto.nl/stock/cars?ownerid=toyota&projection=all&skip=${skip}&limit=${ITEMS_PER_PAGE}`)
      return response.json()
    }
  })

}

export default useGetCars