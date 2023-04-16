import {Issue} from 'src/app/models/issue';

export const issues: Issue[] = [
  {
    issueNo: 1,
    title: 'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: 2,
    title: 'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: 3,
    title: 'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'high',
    type: 'Bug'
  },
  {
    issueNo: 4,
    title: 'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'low',
    type: 'Feature'
  },
  {
    issueNo: 5,
    title: 'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'high',
    type: 'Documentation'
  },
  {
    issueNo: 6,
    title: 'improve search functionality',
    description: 'Implement a more advanced search functionality with options to filter results',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: 7,
    title: 'Fix alignment issues on mobile devices',
    description: 'The layout of some pages is not displaying correctly on smaller mobile devices',
    priority: 'low',
    type: 'Bug'
  },
  {
    issueNo: 8,
    title: 'Add pagination to results page',
    description: 'When a large number of results are displayed, implement pagination ',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: 9,
    title: 'improve accessibility for users',
    description: 'Add support for screen readers and improve color contrast ',
    priority: 'high',
    type: 'Feature'
  },
  {
    issueNo: 10,
    title: 'Upgrade to latest version of framework',
    description: 'Upgrade the application to use the latest version of the chosen framework',
    priority: 'high',
    type: 'Feature'
  }

];
