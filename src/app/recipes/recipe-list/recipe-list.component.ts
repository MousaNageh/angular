import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  selectedRecipeId!: number;
  @Output() selectedRecipe = new EventEmitter<any>();
  public recipes: Recipe[] = [
    new Recipe(
      'recipe 1',
      'this is recipe one',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'
    ),
    new Recipe(
      'recipe 2',
      'this is recipe 2',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'
    ),
  ];
  public recipe: any = null;
  public name: string = '';
  public description: string = '';
  public image: string = '';

  ngOnInit(): void {}
  addRecipe(pecipe: { name: string; description: string; image: string }) {
    this.recipes.push(
      new Recipe(pecipe.name, pecipe.description, pecipe.image)
    );
  }
  showRecipe(id: number) {
    this.selectedRecipeId = id;
    this.recipe = this.recipes[id];
  }
  getAmount(amount: any) {
    this.selectedRecipe.emit(amount);
  }
}
