import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private http: HttpClient) { }


  items : any[] = []


  contactInfo(id: string) {
    window.location.href = '/contact-info/' + id;
  }

  ngOnInit(): void {

    this.http.get("http://localhost:3000/api/getall").subscribe(res => {
      Object.values(res).forEach(val => {
        this.items.push(val);
      })

    }, err => {
      return 0;
    });




  }

  toggleFavorite(id:string, status:boolean) {
    this.http.get("http://localhost:3000/api/setfavorite?id=" + id +"&bool=" + status).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    });
  }




}
