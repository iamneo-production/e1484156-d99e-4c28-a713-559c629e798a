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
import { AdduserComponent } from './admin/user-control/adduser/adduser.component';
import { DeleteuserComponent } from './admin/user-control/deleteuser/deleteuser.component';
import { EdituserComponent } from './admin/user-control/edituser/edituser.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AdduserComponent,
    DeleteuserComponent,
    EdituserComponent,
    GetuserComponent
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
