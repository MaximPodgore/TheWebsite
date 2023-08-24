import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailEditorComponent } from './email-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [EmailEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  exports: [
    EmailEditorComponent
  ],
})
export class EmailEditorModule { }
