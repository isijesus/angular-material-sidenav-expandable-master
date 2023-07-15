import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url: string;
  clients: Client[] = [];
  clientsSubject$ = new BehaviorSubject(undefined);
  clientSubject$ = new BehaviorSubject(undefined);

  constructor(public http: HttpClient) {
    this.url = 'clients/'
    if (!environment.production) {
      this.url = `http://${environment.ipServices}:${environment.portServices}/${environment.contextServices}/clients/`;
    }
  }

  private getAllClientsBackend(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.url}?page=${page}&limit=${limit}`,
      { responseType: 'json' }
    );
  }

  private getClientBackend(clientId: number): Observable<any> {
    return this.http.get(`${this.url}${clientId}`,
      { responseType: 'json' }
    );
  }

  save(client: Client) {
    return this.http.post(this.url, client, { responseType: 'json', headers: new HttpHeaders() });
  }

  getAllClients(page: number, limit: number): void {
    this.clientsSubject$ = new BehaviorSubject(undefined);
    this.getAllClientsBackend(page, limit).subscribe(
      (data) => {
        if (data) {
          this.clients = data;
          this.clientsSubject$.next(data);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  getClient(clientId: number) {
    this.clientSubject$ = new BehaviorSubject(undefined);
    this.getClientBackend(clientId).subscribe(
      (data: Client) => {
        if (data) {
          this.clientSubject$.next(data);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
