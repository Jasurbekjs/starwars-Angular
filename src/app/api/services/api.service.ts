import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable()
export abstract class ApiService {
  protected backendUrl: string;

  constructor(protected http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }
}
