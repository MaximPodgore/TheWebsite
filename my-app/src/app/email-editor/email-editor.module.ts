import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailEditorComponent } from './email-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmailEditorComponent
  ],
})
export class EmailEditorModule { }
