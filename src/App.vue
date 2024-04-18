<template>
    <PokemonList/>
</template>
  
<script setup lang="ts">
import { provide } from 'vue';
import PokemonList from './components/PokemonList.vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: 'https://trygql.formidable.dev/graphql/basic-pokedex',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provide(DefaultApolloClient, apolloClient)

defineOptions({
    name: 'App'
})
</script>
  