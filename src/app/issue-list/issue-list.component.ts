import {Component, OnInit} from '@angular/core';
import {IssuesService} from "../sevices/issues.service";
import {Issue} from "../models/issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  constructor(private issuesService: IssuesService) { }

  private getIssues(){
    this.issues = this.issuesService.getPendingIssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }

}
