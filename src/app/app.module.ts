import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BrandfeatureComponent } from './brandfeature/brandfeature.component';
import { CategoryComponent } from './category/category.component';
import { FproductComponent } from './fproduct/fproduct.component';
import { NewsComponent } from './news/news.component';
import { ReviweComponent } from './reviwe/reviwe.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    BrandfeatureComponent,
    CategoryComponent,
    FproductComponent,
    NewsComponent,
    ReviweComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
