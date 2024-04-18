<template>
  <div v-for="pokemon in pokemons" :key="pokemon?.id">
    {{ pokemon?.name }}
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import { graphql } from '../graphql';
import { computed } from 'vue';

const PokemonsQuery = graphql(`
  query Pokemons ($limit: Int = 10) {
    pokemons(limit: $limit) {
      id
      name
    }
  }
`);

const { result } = useQuery(PokemonsQuery)

const pokemons = computed(() => result.value?.pokemons ?? []);
</script>
