import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import type { Car } from '../../types/Car'

const useGetCarsQueryKey = () => {
  return useMemo(() => ['cars'], [])
}

const useGetCars = () => {
  const queryKey = useGetCarsQueryKey()

  return useQuery<Car[]>({
    queryKey,
    queryFn: async () => {
      const response = await fetch('https://whitelabel.auto.nl/stock/cars?ownerid=toyota&projection=all&skip=0&limit=10')
      return response.json()
    }
  })

}

export default useGetCars