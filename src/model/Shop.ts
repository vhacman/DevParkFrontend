export type ShopType = 'FAST_FOOD' | 'DRINK' | 'DESSERT' | 'GAME' | 'SOUVENIR' | 'RESTAURANT';

export type StatType = 'FAT' | 'SUGAR' | 'SALT' | 'CAFFEINE' | 'ICE' | 'ADDICTIVENESS';

export type StatLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'AVERAGE' | 'TOP_NOTCH';

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export type PrizeType = 'TOY' | 'BALLOON' | 'GIFT' | 'NONE';

export type WaitTime = 'SHORT' | 'LONG';

export class Shop{
    id?:           number;
    name:          string;
    emoji:         string;
    shopType:      ShopType;
    shopCost:      number;       // quanto paghiamo per rifornire il negozio
    salePrice:     number;       // prezzo a cui vendiamo al cliente
    customers:     number;       // numero di clienti attuali => in Ride è Attraction
    buildCost:     number;       // costo per costruire il negozio

    //Proprietà dei negozi con tipo: Cibo, Bevande
    hungerEffect?:  number;   // negativo = riduce fame
    thirstEffect?:  number;   // positivo = aumenta sete
    statType?: StatType;    //Tipo di ingrediente
    statLevel?: statLevel;  //Livello ingrediente

    //Proprietà specifiche di negozio bevande
    addictiveness?: statLevel; //è il livello di dipendenza generato dai drinks

}
