import { Recipe } from '../recipes/recipes.model';

export class Shopping {
  constructor(public recpice: Recipe, public amount: number) {}
}
