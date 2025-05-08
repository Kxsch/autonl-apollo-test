import type { FunctionComponent } from "react"
import type { Car } from "../../types/Car"

import styles from './CarItem.module.css'

interface CarItemProps {
  car: Car
}

const CarItem: FunctionComponent<CarItemProps> = ({ car }) => {
  return (
    <div className={styles.carItem}>
      <p>{car.licensePlate} - {car.brand} {car.model}</p>
    </div>
  )
}

export default CarItem