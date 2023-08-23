import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmailService } from './email.service';
import { Email } from './email-editor';
@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['../../styles.css'],
})
export class EmailEditorComponent implements OnInit {
  statusMessage: string;
  email = new Email();

  constructor(private _emailService: EmailService,
    private _router: Router){}

  ngOnInit() {
  }

  addBook(): void{
    this._emailService.addEmail(this.email)
  }

  
}
