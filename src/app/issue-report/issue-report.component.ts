import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IssuesService} from "../sevices/issues.service";
import {Issue} from "../models/issue";

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;

  @Output() formClose = new EventEmitter();

  suggestions: Issue[] = [];

  constructor(private fb: FormBuilder, private issueService: IssuesService) {
  }

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.issueForm.controls['title'].valueChanges
      .subscribe((title: string) => {
        this.suggestions = this.issueService.getSuggestions(title);
      });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
