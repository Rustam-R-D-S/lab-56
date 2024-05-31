export interface Ingredient{
    name:string;
    price:number;
    image:string;
}
export interface Ingredients{
    name:string;
    count:number;
}
export interface BurgerProps {
    ingredients: { name: string; count: number }[];
    allIngredients: Ingredients[];
}