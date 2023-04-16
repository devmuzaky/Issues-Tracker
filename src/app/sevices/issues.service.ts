import {Injectable} from '@angular/core';
import {Issue} from "../models/issue";
import {issues} from '../../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = issues;

  constructor() {
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue, completed: new Date()
    };

    const index = this.issues.findIndex(i => i.issueNo === issue.issueNo);
    this.issues[index] = selectedIssue;

  }

}
