import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { MyListComponent } from './my-list/my-list.component';
import { ScdcComponent } from './scdc/scdc.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    MyListComponent,
    ScdcComponent,
    RepeatDirective,
    MessageDirective,
    SortPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
