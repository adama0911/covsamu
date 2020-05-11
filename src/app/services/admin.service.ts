import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})


export class AdminService {
  //private patientUrl = "http://localhost/samcovBackend/index.php/admin/patientssymptomes";
  private patientUrl = "https://apitnt.bbstvnet.com/index.php/Cov/admin/patientssymptomes";

  constructor(private http: HttpClient) { }

  getItems(url: string) {
    return this.http.get(this.patientUrl)
  }
}
