import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService, StorageKey } from 'src/app/services/storage.service';
import { Food } from 'src/app/models/models-index';

@Component({
  selector: 'fridge',
  templateUrl: 'fridge.page.html',
  styleUrls: ['fridge.page.scss']
})
export class FridgePage implements OnInit {

  public foodList: Food[] = [];
  public newFood = '';

  constructor(private storage: StorageService) { }

  async ngOnInit(): Promise<void> {
    this.foodList = await this.storage.getObject(StorageKey.FOOD_LIST) || [];
    console.log('LOG: FridgePage -> constructor -> foodList', this.foodList);
  }

  /** Add a new food to the `foodList` */
  public addNewFood() {
    if (this.newFood) {
      console.debug('LOG: FridgePage.addNewFood -> newFood', this.newFood);
      this.foodList.push({ name: this.newFood, amount: 1 });
      this.newFood = '';
      this.updateFoodList(this.foodList);
    }
  }

  /** Edit a food from `foodList` */
  public editFood(food: string, i: number) {
    if (food) {
      this.foodList[i] = {...this.foodList[i], name: food.trim() };
      this.updateFoodList(this.foodList);
    }
  }

  /** Delete a food from `foodList` based on food index */
  public consume(foodIndex: number) {
    console.debug('LOG: FridgePage -> consume -> foodIndex', foodIndex);
    this.foodList.splice(foodIndex, 1);
    this.updateFoodList(this.foodList);
  }

  private updateFoodList(foodList: Food[]): void {
    console.log('LOG: FridgePage -> updateFoodList -> foodList', foodList);
    this.storage.setObject(StorageKey.FOOD_LIST, foodList);
  }

}