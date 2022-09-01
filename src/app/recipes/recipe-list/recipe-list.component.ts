import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This a test recipe item 1', 'https://www.cookingclassy.com/wp-content/uploads/2016/02/creamy_potato_soup9.-500x500.jpg'),
    new Recipe('A Test Recipe 2', 'This a test recipe item 2', 'https://www.cookingclassy.com/wp-content/uploads/2016/02/creamy_potato_soup9.-500x500.jpg'),
    new Recipe('A Test Recipe 3', 'This a test recipe item 3', 'https://www.cookingclassy.com/wp-content/uploads/2016/02/creamy_potato_soup9.-500x500.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
