import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/services/article';

@Component({
  selector: 'app-section-article',
  templateUrl: './section-article.component.html',
  styleUrls: ['./section-article.component.scss']
})
export class SectionArticleComponent implements OnInit {
  @Input() showUser!: boolean;
  @Input() MyArticle!:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
