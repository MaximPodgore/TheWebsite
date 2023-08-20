import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
  ];

  constructor() { }

  public getContacts():Array<{name:any, description:any, email:any}>{
    return this.contacts;
  }
  public createContact(contact: {name:any, description:any, email:any}){
    this.contacts.push(contact);
  }
}
