import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  public vue="";
  @Input() Marque!:any;

  constructor() { }

  ngOnInit(): void {
    this.vue=(Math.random()*10).toPrecision(2);
  }

}
