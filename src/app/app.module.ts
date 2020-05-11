import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'ngx-easy-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListeComponent } from './components/liste/liste.component';

import {CompanyService} from './services/company.service';
// import {ServiceLocator} from './locator.service';
import {ModalModule} from 'angular-custom-modal';
import {NgPipesModule} from 'ngx-pipes';

import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './services/admin.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ModalModule,
    NgPipesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompanyService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
