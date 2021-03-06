import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { FrProfileComponent } from './fr-profile/fr-profile.component';
import { FrLoginComponent } from './fr-login/fr-login.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';
import { environment } from 'src/environments/environment';
import { FrNewsAllComponent } from './fr-news-all/fr-news-all.component';
import { FrAddAdminsComponent } from './fr-add-admins/fr-add-admins.component';
import { FrForgotPasswordComponent } from './fr-forgot-password/fr-forgot-password.component';
import { FrVerifyEmailComponent } from './fr-verify-email/fr-verify-email.component';
import { AuthService } from './shared/services/auth';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    
    

    
    FrNewsComponent,
    FrReportComponent,
    AFrReportsComponent,
    AFrAccountsComponent,
    AFrInfoComponent,
    AFrEventsComponent,
    FrEventsComponent,
    FrProfileComponent,
    FrLoginComponent,
    ArNewsComponent,
    ArReportComponent,
    FrNewsAllComponent,
    FrAddAdminsComponent,
    FrForgotPasswordComponent,
    FrVerifyEmailComponent,
    DashboardAdminComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WebcamModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
   
    
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
