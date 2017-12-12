import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddStudentPage } from '../add-student/add-student';
import { StudentPage } from '../student/student';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StudentPage;
  tab2Root = AboutPage;
  tab3Root = AddStudentPage;

  constructor() {

  }
}
