import { Component, Input } from '@angular/core';
import {EmailEditorComponent} from "./email-editor/email-editor.component";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['../styles.css'],
})

export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Some title");
  }
}
