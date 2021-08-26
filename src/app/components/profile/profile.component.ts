import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/classes/User';
import { Article } from 'src/app/classes/Article';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!:User;
  articles!:Article[];

  constructor(private api:ProfileService) { }

  ngOnInit(): void {
    // --- ID dynamique selon l'utilisateur
    this.getUser("612738761f846995f0f5e6de");
    this.getArticles();
  }

  // +++ filtrer selon categorie
  // +++ trier selon
  getArticles():void {
    this.api.getAllArticles().valueChanges.subscribe(
      ({data, loading}) => {
        this.articles = data.getAllArticles;
        // +++ filtrer les articles de l'utilisateur
      },
      (err) => {console.log(err)}
    );
  }

  getUser(id:any):void {
    this.api.getUserById(id).valueChanges.subscribe(
      ({data, loading}) => {
        this.user = data.getUserById;
      },
      (err) => {console.log(err)}
    );
  }

}
