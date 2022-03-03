import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  public recipe: any = null;
  public name: string = '';
  public description: string = '';
  public image: string = '';
  @Output() emittedRecipe = new EventEmitter<{
    name: string;
    description: string;
    image: string;
  }>();
  addRecipe() {
    this.emittedRecipe.emit({
      name: this.name,
      description: this.description,
      image: this.image,
    });
  }

  ngOnInit(): void {}
}
