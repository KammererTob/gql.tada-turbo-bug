import { graphql } from "./graphql";

const TestQuery = graphql(`
    query PokemonQuery {
        pokemon(id: 1) {
            id
            name
        }
    }
`)