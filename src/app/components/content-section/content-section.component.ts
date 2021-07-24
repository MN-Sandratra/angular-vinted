import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {
  @Input() title!: string;
  @Input() extraLink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
