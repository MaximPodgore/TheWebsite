import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailEditorModule } from './email-editor/email-editor.module';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { EmailService } from './email-editor/email.service';


const appRoutes: Routes = [
  {path: 'home', component: AppComponent },
  //{path: 'emails', component: EmailListComponent},
  {path: 'addEmail', component: EmailEditorComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  //{path: '*', component: PageNotFoundComponent },
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    EmailEditorModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
