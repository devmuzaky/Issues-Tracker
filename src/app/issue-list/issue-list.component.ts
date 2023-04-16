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
  selectedIssue: Issue | null = null;

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit(): void {
    this.getIssues();
  }

  onCloseReportIssue() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issuesService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  private getIssues() {
    this.issues = this.issuesService.getPendingIssues();
  }

}
