import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  constructor( private $base : BaseService) { }

  public getAllproduts() {
    return this.$base.get('/products');
  }
  public login(data) {
    return this.$base.post('/signin', data);
  }
  public signup(data) {
    return this.$base.post('/signup',data);
  }
  
}
