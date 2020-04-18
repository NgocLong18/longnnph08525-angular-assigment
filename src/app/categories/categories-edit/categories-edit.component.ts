import { Component, OnInit } from "@angular/core";
import { Categories } from "../../model/Categories";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: "app-categories-edit",
  templateUrl: "./categories-edit.component.html",
  styleUrls: ["./categories-edit.component.css"]
})
export class CategoriesEditComponent implements OnInit {
  categories: Categories;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.route.params.subscribe(param => {
      this.categoriesService
        .getCourserCategorys(param.id)
        .subscribe(data => (this.categories = data));
    });
  }

  updateCategory() {
    this.categoriesService.updateCategories(this.categories).subscribe(data => {
      this.router.navigateByUrl("/admin/categories-manager");
    });
  }
}
