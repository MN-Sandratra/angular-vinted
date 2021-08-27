import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/services/article';
import { ArticleService } from 'src/app/services/article.service';
import marques from 'src/data/marque';
import category from 'src/data/category';


export interface Etat{
  id:String,
  designation:String,
  description:String,
}

@Component({
  selector: 'app-new-item-descriptions',
  templateUrl: './new-item-descriptions.component.html',
  styleUrls: ['./new-item-descriptions.component.scss']
})

export class NewItemDescriptionsComponent implements OnInit {

  public marques:string[]=[];
  public categories:string[]=[];
  public etats:Etat[]=[];
  constructor(private article:ArticleService) { }
  designation = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  prix = new FormControl('', Validators.required);
  etat = new FormControl('', Validators.required);
  Categorie = new FormControl('', Validators.required);
  marque = new FormControl('', Validators.required);

  ArticleForm=new FormGroup(
    {
      designation:this.designation,
      description:this.description,
      cathegorie:this.Categorie,
      etat:this.etat,
      marque:this.marque,
      prix:this.prix,
    }
  )
  
  ngOnInit(): void {
    this.getAllArticle()
    this.getAllEtat();
  }
  getErrorMessage(champ:FormControl) {
    if (champ.hasError('required')) {
      return 'Complétez ce champ pour continuer';
    }
    return '';
  }

  getAllArticle(){
    this.marques=marques;
    this.categories=category;
  }
  AddArticle(){
    if(this.ArticleForm.valid){
      this.createArticle();
    }else{
      console.log("Erreur");
    }
  }

  createArticle(){
    var newArticle=new Article();
    newArticle.titre=this.designation.value;
    newArticle.description=this.description.value;
    newArticle.etat=this.etat.value;
    newArticle.prix=this.prix.value;
    newArticle.marque=this.marque.value;
    newArticle.color=[];
    newArticle.image=[];

    this.article.createArticle(newArticle).subscribe(data=>{
      console.log(data)
    },
    err=>{
      console.log(err);
    });
  }

  getAllEtat(){
    this.article.getAllEtat().valueChanges.subscribe(
      ({data,loading})=>{
        this.etats=data.getAllEtats;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
