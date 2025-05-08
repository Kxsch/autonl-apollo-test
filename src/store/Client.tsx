// import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { FunctionComponent, PropsWithChildren } from "react"

// ?ownerid=toyota&projection=all&skip=0&limit=10
// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://whitelabel.auto.nl/stock/cars',
//   }),
//   cache: new InMemoryCache(),
// })

const queryClient = new QueryClient()

const StoreClient: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ApolloProvider client={client}> */}
        {children}
      {/* </ApolloProvider> */}
    </QueryClientProvider>

  )
}

export default StoreClient