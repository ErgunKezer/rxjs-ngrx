export interface Ingredient {
    name: string;
    amount: number;
}

export interface InitialState {
    ingredients: Ingredient[];
}
