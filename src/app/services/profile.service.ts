import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';

const getUserById = gql`query ($userId:ID) {
  getUserById(id:$userId) {
    id
    username
    email
    password
    createdAt
  }
}`;

const getAllArticles = gql`query {
  getAllArticles {
    id
    titre
    description
    marque
    etat
    prix
    ISBN
    echange
    matiere
    createdAt
    color {
      id
      color
    }
    image {
      id
      path
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apollo : Apollo) { }

  getUserById(id:any):QueryRef<any, EmptyObject> {
    return this.apollo.watchQuery<any>(
      {
        query: getUserById,
        variables: {
          "userId": id
        }
      }
    )
  }

  getAllArticles():QueryRef<any, EmptyObject> {
    return this.apollo.watchQuery<any>(
      {
        query: getAllArticles
      }
    )
  }

}
