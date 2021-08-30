import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private api:ArticleService) { }
  public id:String='';
  public res=0;
  selecteArticle:Article=new Article();

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

  public chat=[
    {
      message:`Saika isera entana azafady. Miady varota ve sa tode "fixe fixe" ? 😁`,
      status:`receiver ms-auto`,
    },
    {
      message:`Okalo zoky fa makafoky ny alina 🥵, rapitso ny sera`,
      status:`sender me-auto`,
    },
    {
      message:`Okay zoky be 😁`,
      status:`receiver ms-auto`,
    },
  ]

  isEmojiPickerVisible: boolean = false;  
  message:string = "";
  
  addEmoji(event:any) {
      this.message = `${this.message}${event.emoji.native}`;
      this.isEmojiPickerVisible = false;
  }

  onPost() {
    if(this.message !== "\n" && this.message !== "") {
      let data={
        message:this.message,
        status:'receiver ms-auto'
      }
      this.chat.push(data);
    }
    this.message = "";
  }
}
