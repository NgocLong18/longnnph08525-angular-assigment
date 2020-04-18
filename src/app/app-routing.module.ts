import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { NotfoundComponent } from "./notfound/notfound.component";
import { HomeComponent } from "./home/home.component";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProductAddComponent } from "./product-list/product-add/product-add.component";
import { ProductEditComponent } from "./product-list/product-edit/product-edit.component";
import { CategoriesListComponent } from "./categories/categories-list/categories-list.component";
import { CategoriesEditComponent } from "./categories/categories-edit/categories-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin", component: SidebarComponent,
    children: [
      { path: "", redirectTo: "dashboard",pathMatch: "full"},
      { path: "dashboard", component: ProductListComponent},
      { path: "dashboard/product-add", component: ProductAddComponent },
      { path: "dashboard/product-edit/:id", component: ProductEditComponent},
      { path: "categories-manager", component: CategoriesListComponent },
      { path: "categories-manager/catgory-edit/:id", component: CategoriesEditComponent }
    ]
  },
  { path: "product/:id", component: ProductDetailComponent },

  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
