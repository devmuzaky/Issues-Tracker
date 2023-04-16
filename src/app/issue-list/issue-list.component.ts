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
  showReportIssue: boolean = false;

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReportIssue() {
    this.showReportIssue = false;
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issuesService.getPendingIssues();
  }

}
