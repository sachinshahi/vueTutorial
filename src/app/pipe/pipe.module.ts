import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SanitizeHtmlPipe} from './sanitize/sanitize-html.pipe';
import {SanitizeJSPipe} from './sanitize/sanitize-js.pipe';

@NgModule({
  declarations: [SanitizeHtmlPipe, SanitizeJSPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeHtmlPipe, SanitizeJSPipe]
})
export class PipeModule { }
