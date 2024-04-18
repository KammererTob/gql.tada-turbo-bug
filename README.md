## Description
This repository contains a reproduction of a possible bug where gql.tada does not generate entries for the turbo cache from queries defined in Vue SFC files (i.e. .vue files). Normal typescript files work fine.

## Instructions
1. `yarn / npm install`
2. `gql.tada turbo`
3. Only the document in `random.ts` will be detected. Not the one from `PokemonList.vue`