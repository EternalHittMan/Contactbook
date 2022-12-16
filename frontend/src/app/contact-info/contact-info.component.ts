import {Component, OnInit} from '@angular/core';
import {Model} from "../model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit{

  constructor(private http: HttpClient) { }


  image= "";
  name = "";
  job="";

  id = window.location.pathname.split("/")[2];

  items : any = {}

  ngOnInit(): void {

    this.http.get("http://localhost:3000/api/find?_id=" + this.id).subscribe(res => {

      this.items = res;

    }, err => {
      return 0;
    });

  }

  edit(id: string) {
    window.location.href = '/add-contact/' + id;
  }

  delete(id: string) {

    if (confirm("Kayıt silinecek. Devam etmekte emin misiniz?")) {

      this.http.get("http://localhost:3000/api/deletedata?_id=" + this.id).subscribe(res => {

        window.location.href = '/';
        console.log(res)

      }, err => {
        console.log(err)

      });
    }
  }




}
