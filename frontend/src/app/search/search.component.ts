import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private http: HttpClient) { }


  items : any[] = []

  search: string = window.location.pathname.split("/")[2];

  contactInfo(id: string) {
    window.location.href = '/contact-info/' + id;
  }

  ngOnInit(): void {

    this.http.get("http://localhost:3000/api/searchbyname?name="+ this.search).subscribe(res => {
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
