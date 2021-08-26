import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-new-item-add-photos',
  templateUrl: './new-item-add-photos.component.html',
  styleUrls: ['./new-item-add-photos.component.scss']
})
export class NewItemAddPhotosComponent implements OnInit {
  
  onFolderSelected(event?:any){
    if (event.target.files.length > 0){
        let files = event.target.files;
    }     
}


  constructor() { }

  
  ngOnInit(): void {
  
  }

}
