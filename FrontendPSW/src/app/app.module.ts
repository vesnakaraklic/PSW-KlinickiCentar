import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminKcComponent } from './components/admin-kc/admin-kc.component';
import { ZahteviZaRegistracijuComponent } from './components/admin-kc/zahtevi-za-registraciju/zahtevi-za-registraciju.component';
import { AccountActivatedComponent } from './components/register/account-activated/account-activated.component';
import { PacijentComponent } from './components/pacijent/pacijent.component';
import { OdbijanjeDialogComponent } from './components/admin-kc/zahtevi-za-registraciju/odbijanje-dialog/odbijanje-dialog.component';
import { PacijentProfilComponent } from './components/pacijent/pacijent-profil/pacijent-profil.component';
import { PacijentProfilDialogComponent } from './components/pacijent/pacijent-profil/pacijent-profil-dialog/pacijent-profil-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    AdminKcComponent,
    ZahteviZaRegistracijuComponent,
    AccountActivatedComponent,
    PacijentComponent,
    OdbijanjeDialogComponent,
    PacijentProfilComponent,
    PacijentProfilDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [PacijentProfilDialogComponent, OdbijanjeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
