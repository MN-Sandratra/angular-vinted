import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss']
})
export class AchatComponent implements OnInit {

  constructor(private route:ActivatedRoute,private api:ArticleService) { }
  public id:String='';
  public res=0;
  selecteArticle:Article=new Article();

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getSelectedArticle();
    this.res=this.getTotal();
  }
  getSelectedArticle(){
    this.api.getArticleById(this.id).valueChanges.subscribe(
      ({data,loading})=>{
        this.selecteArticle=data.getArticleById
        this.res=this.getTotal();
      })
  }

  getTotal(){
    var res=parseInt(""+this.selecteArticle.prix)+4000;
    return res;
  }

}
