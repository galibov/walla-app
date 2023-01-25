import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function CarList() {
  const dispatch = useDispatch()
  const cars = useSelector(selectCars)

  useEffect(() => {
    dispatch(fetchCars())
  }, [dispatch])

  return (
    <div>
      {cars.map(car => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  )
}