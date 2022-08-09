import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PlanetsService extends ApiService {
    endpoint = 'api/planets';

    getPlanets(queryParams: any) {
        return this.http.get<any>(`${this.backendUrl}/${this.endpoint}?page=${queryParams.page}&pageSize=${queryParams.pageSize}`);
    }

    getAllPlanets() {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/all`);
    }

    getPlanet(id: any) {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/${id}`);
    }

    editPlanet(planet: any){
      return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/edit`, planet);
    }
    addPlanet(planet: any){
        return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/add`, planet);
    }
    deletePlanet(planet: any){
        return this.http.delete<any>(`${this.backendUrl}/${this.endpoint}/delete/${planet.id}`);
    }

}
