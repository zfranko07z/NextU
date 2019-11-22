import { TestBed } from '@angular/core/testing';

import { TiendaService } from './tienda.service';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

describe('TiendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiendaService = TestBed.get(TiendaService);
    expect(service).toBeTruthy();
  });
});
