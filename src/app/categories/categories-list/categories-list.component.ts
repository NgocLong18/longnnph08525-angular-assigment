import { Component, OnInit } from '@angular/core';
import { Categories } from '../../model/Categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
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