import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LevelDetail } from 'app/models/level.model';
import { environment as env } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService extends BaseService {

  private levelEndpoint = `${env.API_URL}/admin/users`;

  constructor(http: HttpClient) {
    super(http);
  }

  public updateCustomer = (id: number, data: any) => {
    return this.patch(data, `${this.levelEndpoint}/${id}`);
  }

  public createCustomer(data: any) {
    return this.post(`${this.levelEndpoint}`, data);
  }

  public deleteCustomerById(id: any) {
    return this.delete(`${this.levelEndpoint}/${id}`);
  }

  public getCustomerById = (id: number) => {
    return this.get(`${this.levelEndpoint}/${id}`);
  }

}
