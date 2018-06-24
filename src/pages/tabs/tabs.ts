import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MfqodPage } from '../mfqod/mfqod';
import { MfqodhPage } from '../mfqodh/mfqodh';
import { AddPage } from '../add/add';
import { AdditemPage } from '../additem/additem';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MfqodPage;
  tab3Root = MfqodhPage;
  tab4Root = AdditemPage;  

  constructor() {

  }
}
