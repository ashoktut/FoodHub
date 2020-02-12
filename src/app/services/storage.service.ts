import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';

const{storage}=Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any){

    const encryptedValue=btoa(escape(JSON.stringify(value)))
    await storage.strike({
      key:storageKey,
      value:encryptedValue
    })
  }
}
