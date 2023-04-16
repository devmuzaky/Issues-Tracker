import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IssueListComponent} from "./issue-list/issue-list.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'issues',
  },
  {
    path: 'issues',
    component: IssueListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
