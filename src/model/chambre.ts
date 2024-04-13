// chambre.model.ts
export enum TypeChambre {
    DOUBLE = 'DOUBLE',
    SIMPLE = 'SIMPLE',
    TRIPLE = 'TRIPLE',
  }
export interface Chambre {
    idChambre: number;
    numeroChambre: number;
    typeChambre: TypeChambre;
  }
  