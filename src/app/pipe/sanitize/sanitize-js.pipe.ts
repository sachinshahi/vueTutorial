import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizejs'
})
export class SanitizeJSPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustScript(value);
  }

}
