import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IssuesService} from "../sevices/issues.service";

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;

  @Output() formClose = new EventEmitter();

  constructor(private fb: FormBuilder, private issueService: IssuesService) {
  }

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      title: [''], description: [''], priority: [''], type: ['']
    });
  }

  addIssue() {
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
