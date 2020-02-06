import {Observable} from 'rxjs';

export class Layout {
  public constructor(public title: string, public  content: string) {
  }
}

export class AdvancedLayout {
  public constructor(public title: string, public  content: Observable<string>) {
  }
}

