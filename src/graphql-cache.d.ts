/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n    query PokemonQuery {\n        pokemon(id: 1) {\n            id\n            name\n        }\n    }\n":
      TadaDocumentNode<{ pokemon: { name: string; id: string; } | null; }, {}, void>;
  }
}
