import { Component, OnInit } from '@angular/core';
import { TabElementComponent } from '../tab-element/tab-element.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs: TabElementComponent[] = []

  addTab(tab: TabElementComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabElementComponent) {
    this.tabs.map((tab) => {
      tab.active = false;
    })
    tab.active = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
