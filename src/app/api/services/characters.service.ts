import { Injectable } from '@angular/core';
import { Character } from 'src/app/pages/characters/characters.component';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class CharactersService extends ApiService {
    endpoint = 'api/characters';

    getCharacters(queryParams: any) {
        return this.http.get<any>(`${this.backendUrl}/${this.endpoint}?page=${queryParams.page}&pageSize=${queryParams.pageSize}`);
    }
    getCharacter(id: any) {
        return this.http.get<any>(`${this.backendUrl}/${this.endpoint}/${id}`);
    }
    editCharacter(character: any){
        return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/edit`, character);
    }
    addCharacter(character: any){
        return this.http.post<any>(`${this.backendUrl}/${this.endpoint}/add`, character);
    }
    deleteCharacter(character: any){
        return this.http.delete<any>(`${this.backendUrl}/${this.endpoint}/delete/${character.id}`);
    }
}
