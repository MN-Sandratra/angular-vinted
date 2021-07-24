import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-article',
  templateUrl: './section-article.component.html',
  styleUrls: ['./section-article.component.scss']
})
export class SectionArticleComponent implements OnInit {
  @Input() showUser!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
