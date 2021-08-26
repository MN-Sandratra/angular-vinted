import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/classes/Article';
import { User } from 'src/app/classes/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-section-article',
  templateUrl: './section-article.component.html',
  styleUrls: ['./section-article.component.scss']
})
export class SectionArticleComponent implements OnInit {
  @Input() showUser!: boolean;
  @Input() prix!: Number;
  @Input() description!: String;
  @Input() etat!: String;
  @Input() marque!: String;
  @Input() matiere!: String;
  @Input() titre!: String;

  user!: User;

  constructor(private api:ProfileService) { }

  ngOnInit(): void {
    // --- ID dynamique selon l'utilisateur
    this.getUser("612738761f846995f0f5e6de");
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
