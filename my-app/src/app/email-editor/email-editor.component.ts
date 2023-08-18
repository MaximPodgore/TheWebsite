import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['../../styles.css'],
})
export class EmailEditorComponent {
  reactiveForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl(""),
  })

  onSubmit(): void {
    console.log(this.reactiveForm);
  }
}
