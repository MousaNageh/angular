import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any = null;
  @Input() recipeId!: number;
  @Output() AmountVal = new EventEmitter<any>();
  amount!: any;
  constructor() {}

  ngOnInit(): void {}
  addAmount() {
    this.AmountVal.emit({ amount: this.amount, recipe: this.recipe });
    this.amount = null;
  }
}
