import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  isEmojiPickerVisible: boolean = false;  
  message:string = "";
  
  addEmoji(event:any) {
      this.message = `${this.message}${event.emoji.native}`;
      this.isEmojiPickerVisible = false;
  }

  onPost() {
    if(this.message !== "\n" && this.message !== "") {
      
    }
    this.message = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
