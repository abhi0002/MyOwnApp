import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[] = [
   new Recipe('Chicken Sausage',
    'A simple Dish',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBwnf2WAf7GXOBElgX1Bt1uwXu0UtpDQRn9d2ynkC-oehGywq'),
    new Recipe('Pasta Recipe',
     'My Favorite Dish',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZhNXdjxS0WYTQ8S9su_EouLvuL8osk5zxwlBPc4GM_mebJPg')
 ];
  @Output() recipeHereClicked = new EventEmitter<Recipe>();

  onRecipeClicked(recipe: Recipe) {
    this.recipeHereClicked.emit(recipe);
  }

  constructor() { }
  ngOnInit() {
  }

}
