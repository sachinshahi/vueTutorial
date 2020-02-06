import {Component, OnInit} from '@angular/core';
import {AdvancedLayout, Layout} from '../../model/Layout';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as conditionalContent from './real-development-work-flow.json';

@Component({
  selector: 'app-real-development-work-flow',
  templateUrl: './real-development-work-flow.component.html',
  styleUrls: ['./real-development-work-flow.component.css']
})
export class RealDevelopmentWorkFlowComponent implements OnInit {

  public prefix = 'assets/real-development-work-flow';
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
