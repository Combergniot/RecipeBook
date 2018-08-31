import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hot Dog',
      'Taka tam bułka z parówką',
      'https://rapidbrandsinc.com/wp-content/uploads/2017/05/Screenshot.png'),
    new Recipe('Hot Dog',
      'Taka tam bułka z parówką',
      'https://rapidbrandsinc.com/wp-content/uploads/2017/05/Screenshot.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
