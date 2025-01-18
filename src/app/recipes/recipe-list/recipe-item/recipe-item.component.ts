import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: false,

  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipreService: RecipeService) {}

  onSelectRecipe() {
    this.recipreService.recipeSelected.emit(this.recipe);
  }
}
