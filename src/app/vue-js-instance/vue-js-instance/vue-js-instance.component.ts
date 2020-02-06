import { Component, OnInit } from '@angular/core';
import {AdvancedLayout, Layout} from '../../model/Layout';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as conditionalContent from './vue-js-instance.json';


@Component({
  selector: 'app-vue-js-instance',
  templateUrl: './vue-js-instance.component.html',
  styleUrls: ['./vue-js-instance.component.css']
})
export class VueJsInstanceComponent implements OnInit {

  public prefix = 'assets/vue-js-instance'
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
