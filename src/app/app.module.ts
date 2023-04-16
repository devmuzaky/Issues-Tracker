import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IssueListComponent} from './issue-list/issue-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {IssueReportComponent} from './issue-report/issue-report.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { HeaderComponent } from './core/header/header.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    ConfirmDialogComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
