import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import type { FunctionComponent, PropsWithChildren } from "react"

// ?ownerid=toyota&projection=all&skip=0&limit=10
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://whitelabel.auto.nl/stock/cars',
    useGETForQueries: true,

  }),
  cache: new InMemoryCache(),
})

const Apollo: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default Apollo