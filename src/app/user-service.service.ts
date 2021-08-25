import { Injectable } from '@angular/core';
import {gql,Apollo, QueryRef} from 'apollo-angular'
import { EmptyObject } from 'apollo-angular/types';
import { User } from './models/User';

const getUsers = gql`query {
  getAllUsers {
    password
    username
    email
  }
}`;

const createUser = gql`mutation($user: UserInput) { 
  createUser(user: $user) {
    username,
    password,
    email
  }
}`;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo:Apollo) { }

  getAllUser():QueryRef<any, EmptyObject>{
    return this.apollo.watchQuery<any>({
      query:getUsers
    })
  }

  createUser(user:User){
    return this.apollo.mutate({
        mutation : createUser,
        variables: {
        user: {
          username: user.username,
          password: user.password,
          email: user.email
        }
      }
    })
  }
}
