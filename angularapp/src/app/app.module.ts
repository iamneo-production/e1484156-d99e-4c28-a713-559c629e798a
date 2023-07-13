import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AddonComponent } from './admin/AddOn/addon/addon.component';
import { DeleteaddonComponent } from './admin/AddOn/deleteaddon/deleteaddon.component';
import { EditaddonComponent } from './admin/AddOn/editaddon/editaddon.component';
import { GetaddonComponent } from './admin/AddOn/getaddon/getaddon.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddonComponent,
    DeleteaddonComponent,
    EditaddonComponent,
    GetaddonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
