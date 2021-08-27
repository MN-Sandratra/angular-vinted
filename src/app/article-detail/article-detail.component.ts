import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public id:String='';
  selecteArticle:Article=new Article();
  constructor(private route:ActivatedRoute,private api:ArticleService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getSelectedArticle();
  }

  getSelectedArticle(){
    this.api.getArticleById(this.id).valueChanges.subscribe(
      ({data,loading})=>{
        this.selecteArticle=data.getArticleById
      })
  }

  getEtatById(id:String){
    let Etat:any;
    this.api.getEtatById(this.id).valueChanges.subscribe(
      ({data,loading})=>{
        Etat:data;
      },err=>{
        console.log(err);
      }
    );
    return Etat.designation;
  }



}
