import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class FilmsService extends ApiService {
    endpoint = 'api/films';

    getFilms(queryParams: any) {
        return this.http.get<any>(`${this.backendUrl}/${this.endpoint}?page=${queryParams.page}&pageSize=${queryParams.pageSize}`);
    }

    getAllFilms() {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/all`);
    }

    getFilm(id: any) {
      return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/${id}`);
    }

    editFilm(film: any){
      return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/edit`, film);
    }
    addFilm(film: any){
        return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/add`, film);
    }
    deleteFilm(film: any){
        return this.http.delete<any>(`${this.backendUrl}/${this.endpoint}/delete/${film.id}`);
    }

}
