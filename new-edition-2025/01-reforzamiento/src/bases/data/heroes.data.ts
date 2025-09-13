//type Owner = 'DC' | 'Marvel'
export enum Owner {
    DC = 'DC', //0 DC
    Marvel = 'Marvel' //1 Marvel
}

export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        //owner: 'DC'
        owner: Owner.DC
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel
    },
]

//export default heroes;

