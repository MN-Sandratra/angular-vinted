import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { Article } from './article';

const getEtats = gql`query{
  getAllEtats{
    id
    designation
    description
  }
}`;

const getEtatById = gql`query($id:ID){
  getEtatById(id:$id){
    id
    designation
    description
  }
}`

//Article
const getArticles = gql`query{
  getAllArticles{
    id
    titre
    description
    marque
    etat
    prix
    echange
    createdAt
    image{
      path
    }
  }
}`


const getArticleById=gql`query($id:ID){
  getArticleById(id:$id){
    id
    titre
    description
    marque
    etat
    prix
    echange
    createdAt
    image{
      id
      path
    }
  }
}`

const createArticle=gql`mutation($ArticleInput:ArticleInput){
  createArticle(article:$ArticleInput){
    id
    titre
    description
    marque
    etat
    prix
    image{
      id
      path
    }
    echange
    createdAt
  }
}`

const updateArticle=gql`query($id:String,$ArticleInput:ArticleInput){
  updateArticle(id:$id,article:$ArticleInput){
    id
    titre
    description
    marque
    etat
    prix
    echange
    createdAt
    image
  }
}`

const getCathegories=gql`query{
  getAllCathegories{
    id
    designation
    sousCathegorie
  }
}`

const getCathegorieById=gql`query($id:String){
  getCathegorieById(id:$id){
    id
    designation
    sousCathegorie
  }
}`

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private apollo:Apollo) { }

  //Etat
  getAllEtat():QueryRef<any, EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getEtats
    })
  }
  getEtatById(id:any):QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getEtatById,
      variables:{
        "id":id
      }
    })
  }

  //Cathegorie
  getAllCathegorie():QueryRef<any, EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getCathegories
    })
  }
  getCathegorieById(id:any):QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getCathegorieById,
      variables:{
        "id":id
      }
    })
  }

  //Article
  getArticles():QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getArticles,
    })
  }

  getArticleById(id:any):QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getArticleById,
      variables:{
        "id":id
      }
    })
  }

  //create 
  createArticle(article:Article){
    return this.apollo.mutate({
      mutation:createArticle,
      variables:{
        "ArticleInput":{
          titre:article.titre,
          description:article.description,
          marque:article.marque,
          etat:article.etat,
          prix:article.prix,
          echange:article.echange,
          createdAt:article.createdAt,
          image:article.image,
        }
      }
    })
  }

  //update
  updateArticle(id:any,article:Article){
    return this.apollo.mutate({
      mutation:updateArticle,
      variables:{
        "id":id,
        "ArticleInput":{
          titre:article.titre,
          description:article.description,
          marque:article.marque,
          etat:article.etat,
          prix:article.prix,
          echange:article.echange,
          createdAt:article.createdAt,
          image:article.image,
          
        }
      }
    })
  }

}
