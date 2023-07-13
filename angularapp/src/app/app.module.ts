import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { ViewmoredetailsComponent } from './user/viewmoredetails/viewmoredetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CartComponent,
    ViewbookingComponent,
    ViewmoredetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
