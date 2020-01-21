import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SanitizeHtmlPipe} from './sanitize/sanitize-html.pipe';

@NgModule({
  declarations: [SanitizeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeHtmlPipe]
})
export class PipeModule { }
