import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/Models/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestItemService {

  constructor(private http: HttpClient) { }
  itemDetailId = new Subject<number>();
  getItems() {
    // return this.http.get<Item[]>('http://localhost:3000/request_items/'+reqId);
    return this.http.get<Item[]>('http://localhost:3000/request_items');
  }
}
