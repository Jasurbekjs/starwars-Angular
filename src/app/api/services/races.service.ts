import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class RacesService extends ApiService {
    endpoint = 'api/races';

    getRaces(queryParams: any) {
        return this.http.get<any>(`${this.backendUrl}/${this.endpoint}?page=${queryParams.page}&pageSize=${queryParams.pageSize}`);
    }

    getAllRaces() {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/all`);
    }

    getRace(id: any) {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/${id}`);
    }

    editRace(race: any){
      return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/edit`, race);
    }
    addRace(race: any){
        return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/add`, race);
    }
    deleteRace(race: any){
        return this.http.delete<any>(`${this.backendUrl}/${this.endpoint}/delete/${race.id}`);
    }

}
