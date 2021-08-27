import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/services/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() articles = [...Array(5).keys()];

  public Articles:Article[]=[];
  constructor(private api :ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle();
  }

  getAllArticle(){
    this.api.getArticles().valueChanges.subscribe(
      ({data,loading})=>{
        console.log(data)
        this.Articles=data.getAllArticles;
      },err=>{
        console.log(err);
      }
    )
  }
}
