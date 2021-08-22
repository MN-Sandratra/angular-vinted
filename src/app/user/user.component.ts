import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../models/User';

const getUsers = gql`query {
  getAllUsers {
    id
    username
    email
  }
}`;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUsers:User[] = [];


  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: getUsers
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allUsers = data.getAllUsers;
    })
  }

}
