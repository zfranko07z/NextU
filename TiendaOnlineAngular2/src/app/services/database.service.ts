import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
}
