import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {PersonType} from "./personType";

@Injectable()
export class PeopleService {
  private apiUrl = 'https://swapi.co/api/';
  private nextPage: string = null;

  constructor(private httpClient: HttpClient) {
  }

  getPeople() {
    let requestUrl = this.apiUrl + 'people/';
    if (this.nextPage) {
      requestUrl = this.nextPage;
    }
    return this.httpClient.get<any>(requestUrl).pipe(
      tap(response => {
        this.nextPage = response.next;
        //console.log(response)
      }),
      map(response => {
        //this.nextPage = response.next;
        const people = response.results.map(apiPerson => {
          const ourPerson = new PersonType();
          ourPerson.name = apiPerson.name;
          ourPerson.birthYear = apiPerson.birth_year;
          return ourPerson;
        });
        return [people || [], this.nextPage];
      }),
    );
  }

  getNextPage() {
      return this.getPeople();
  }
}
