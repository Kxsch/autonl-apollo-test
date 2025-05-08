import { useMemo, type FunctionComponent } from "react"
import type { Car } from "../../types/Car"

import styles from './CarItem.module.css'

interface CarItemProps {
  car: Car
}

const CarItem: FunctionComponent<CarItemProps> = ({ car }) => {
  const specifications = useMemo(() => {
    const specs = []
    if (car.specifications.androidAuto) specs.push('Android Auto')
    if (car.specifications.appleCarPlay) specs.push('Apple Car Play')
    return specs
  }, [car])

  // Accessories are split into different categories
  // Each item could potentially have duplicates
  const accessories = useMemo(() => {
    const accs =  car.accessories.reduce((acc, accessory) => {
      if (accessory.items.includes('trekhaak')) acc.set('Trekhaak', true)
      return acc
    }, new Map())
    return [...accs.keys()]
  }, [car])

  return (
    <div className={styles.carItem}>
      <div>{car.licensePlate}</div>
      <div>{car.brand} {car.model}</div>
      <div>{car.measurements.maximumPermissibleMass}kg</div>
      <div>&euro;{car.price}</div>
      <div>{specifications.map((spec) => <div key={spec}>{spec}</div>)}</div>
      <div>{accessories.map((acc) => <div key={acc}>{acc}</div>)}</div>
    </div>
  )
}

export default CarItem