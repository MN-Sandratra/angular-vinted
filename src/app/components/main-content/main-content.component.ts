import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/services/article';
import { ArticleService } from 'src/app/services/article.service';
import marques from 'src/data/marque';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public Marques=marques;

  @Input() articles = [...Array(5).keys()];

  public Articles:Article[]=[];
  constructor(private api :ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle();
    this.Marques=this.getFiveMarque();
  }

  getFiveMarque(){
    var res=[];
    for (let index = 0; index < 5; index++) {
      res.push(marques[index]);
      
    }
    return res;
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
