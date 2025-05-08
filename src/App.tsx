import Body from './components/body/Body'
import CarList from './components/car-list/CarList'
import StoreClient from './store/Client'

function App() {
  return (
    <Body>
      <StoreClient>
        <CarList />
      </StoreClient>
    </Body>
  )
}

export default App
