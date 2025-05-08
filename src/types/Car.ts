export interface Car {
  id: {
    carId: number
  }
  licensePlate: string
  brand: string
  model: string
  price: number
  measurements: {
    maximumPermissibleMass: number
  }
  specifications: {
    appleCarPlay: boolean
    androidAuto: boolean
  }
  accessories: {
    name: string
    items: string[]
  }[]
}