import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Spaghetti', 
            'This is a spaghetti.', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/03/02/fork-lifting-up-spaghetti.jpg.rend.hgtvcom.616.462.suffix/1646241241407.jpeg',
            [
                new Ingredient('Spicy Sausage', 1),
                new Ingredient('Spaghetti Noodles', 1),
                new Ingredient('Spaghetti Sauce', 1),
                new Ingredient('Garlic Powder', 1),
                new Ingredient('Onion Powder', 1),
                new Ingredient('Thyme', 1),
                new Ingredient('Oregano', 1),
                new Ingredient('Paprika', 1)
            ]),
        new Recipe(
            'Biscuits & Gravy', 
            'MMMMMMMMMMMMMMMMMMMM', 
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F18%2F216391-easy-sausage-gravy-and-biscuits-TTV78-3x2-1.jpg&q=60',
            [
                new Ingredient('Spicy Sausage', 1),
                new Ingredient('Canned Biscuits', 1),
                new Ingredient('Milk', 1)
            ]),
        new Recipe(
            'Potato Soup', 
            'Ah, Goo Lagoon', 
            'https://www.cookingclassy.com/wp-content/uploads/2016/02/creamy_potato_soup9.-500x500.jpg',
            [
                new Ingredient('Spicy Sausage', 1),
                new Ingredient('Potatoes', 4),
                new Ingredient('Milk', 1),
                new Ingredient('Flour', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Peas', 1),
            ]),
      ];

      constructor(private slService: ShoppingListService) {

      }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}