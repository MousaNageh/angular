import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ItemComponent } from './recipes/recipe-list/item/item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { HighLight } from './directives/high-light.directive';
import { BetterHighLightDirective } from './directives/better-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    ItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NavbarComponent,
    RecipeFormComponent,
    HighLight,
    BetterHighLightDirective,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
