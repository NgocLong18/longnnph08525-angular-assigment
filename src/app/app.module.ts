import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubcribeComponent } from './subcribe/subcribe.component';
import { ProductService } from './services/product.service';
import { CategoriesService } from './services/categories.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports:      [ BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, BannerComponent, CategoriesComponent, HomeComponent, JumbotronComponent, NotfoundComponent, ProductComponent, ProductAddComponent, ProductDetailComponent, ProductListComponent, SubcribeComponent, HeaderComponent, FooterComponent, SidebarComponent, ProductEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, CategoriesService]
})
export class AppModule { }
