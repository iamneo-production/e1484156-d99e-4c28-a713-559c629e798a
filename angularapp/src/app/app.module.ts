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
import { AddthemeComponent } from './admin/AddTheme/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/AddTheme/deletetheme/deletetheme.component';
import { EditthemeComponent } from './admin/AddTheme/edittheme/edittheme.component';
import { GetThemeComponent } from './admin/AddTheme/get-theme/get-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddthemeComponent,
    DeletethemeComponent,
    EditthemeComponent,
    GetThemeComponent
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
