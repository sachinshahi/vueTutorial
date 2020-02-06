import { Component, OnInit } from '@angular/core';
import {AdvancedLayout, Layout} from '../../model/Layout';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as conditionalContent from './communication-between-component.json';


@Component({
  selector: 'app-communication-between-component',
  templateUrl: './communication-between-component.component.html',
  styleUrls: ['./communication-between-component.component.css']
})
export class CommunicationBetweenComponentComponent implements OnInit {

  public prefix = 'communication-between-component'
  public contents: Layout[] = conditionalContent.content;
  public advancedLayout: AdvancedLayout[] = [];
  public javascriptCode: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    for (let i = 0; i < this.contents.length; i++) {
      this.advancedLayout[i] = new AdvancedLayout(this.contents[i].title, this.getJSON(this.contents[i].content));
    }
  }

  public getJSON(fileName: string): Observable<any> {
    return this.http.get<Observable<any>>(`${this.prefix}/${fileName}`, {responseType: 'html'});
  }

}
