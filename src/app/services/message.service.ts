import { Injectable } from '@angular/core';
import {gql, Apollo,QueryRef} from 'apollo-angular'
import{EmptyObject} from 'apollo-angular/types'

const getAllMessage=gql`query{
  getAllMessages{
    id
    sender
    receiver
    article
    message
    createdAt
  }
}`

const getMyMessageAndOther=gql`query($sender:String,$receiver:String){
  getMyMessageAndOther(sender:$sender,receiver:$receiver){
    id
    sender
    receiver
    article
    message
    createdAt
  }
}`
const getMyMessageByArticle=gql`query($sender:ID,$article:ID){
  getMyMessageByArticle(sender:$sender,article:$article){
    id
    sender
    receiver
    article
    message
    createdAt
  }
}`


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apollo:Apollo) { }

  getAllMessage():QueryRef<any, EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getAllMessage
    })
  }
  getMyMessageAndOther(sendrer:any,receiver:any):QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getMyMessageAndOther,
      variables:{
        "sender":sendrer,
        "receiver":receiver
      }
    })
  }

  getMyMessageAndArticle(sendrer:any,article:any):QueryRef<any,EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getMyMessageByArticle,
      variables:{
        "sender":sendrer,
        "article":article
      }
    })
  }
}
