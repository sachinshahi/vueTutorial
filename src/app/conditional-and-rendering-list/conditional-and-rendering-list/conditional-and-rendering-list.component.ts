import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import * as conditionalContent from './conditional-and-rendering-list.json';
import {AdvancedLayout, Layout} from '../../model/Layout';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-conditional-and-rendering-list',
  templateUrl: './conditional-and-rendering-list.component.html',
  styleUrls: ['./conditional-and-rendering-list.component.css']
})
export class ConditionalAndRenderingListComponent implements OnInit {

  public prefix = 'assets/conditional-and-rendering-list'
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
