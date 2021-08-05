import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab-element',
  templateUrl: './tab-element.component.html',
  styleUrls: ['./tab-element.component.scss']
})
export class TabElementComponent implements OnInit {
  @Input() title: string="";
  @Input() active: boolean=false;

  constructor(tabs:TabsComponent) { 
    tabs.addTab(this);
  }

  ngOnInit(): void {
  }

}
