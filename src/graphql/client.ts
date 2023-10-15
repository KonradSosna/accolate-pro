import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://snowtooth.moonhighway.com/',
	cache: new InMemoryCache(),
});
