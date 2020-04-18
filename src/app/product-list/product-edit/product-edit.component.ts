import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../model/Product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(param => {
      this.productService
        .getProduct(param.id)
        .subscribe(data => (this.product = data));
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/admin");
    });
  }
}
