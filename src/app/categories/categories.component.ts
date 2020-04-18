import { Component, OnInit } from '@angular/core';
import { Categories } from '../model/Categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
selected: Categories;
  categories: Categories[];
  constructor(
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCourserCategory();
  }
  
  getCourserCategory(){
    this.categoriesService.getCourserCategory().subscribe(data => {
      console.log(data);
      this.categories = data;
     });
   }

}