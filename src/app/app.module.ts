import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    ArchieveComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   {path : '', component : HomeComponent},
    //   {path : 'archieve/:year/:month', component : ArchieveComponent},
    //   {path : '**', component : NotFoundComponent}
    // ]),

    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    OrderService,

    AuthService,

    // For creating a mock back-end. You don't need these in a real app. 
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
