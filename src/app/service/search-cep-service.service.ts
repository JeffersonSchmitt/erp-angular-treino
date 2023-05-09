import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCep } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class SearchCepServiceService {
  constructor(private http: HttpClient) {}

  searchCep(cep: string) {
    const result = this.http.get<ViaCep>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    return result;
  }
}
