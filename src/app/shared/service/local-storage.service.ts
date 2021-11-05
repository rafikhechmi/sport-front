import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): string {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
