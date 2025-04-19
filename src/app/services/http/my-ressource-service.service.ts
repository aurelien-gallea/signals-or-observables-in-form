import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from "@angular/core/rxjs-interop";
import { Book } from '../../core/models/Book.model';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyRessourceServiceService {

  

  books = signal<Book[]>([
    {
      id: 1,
      titre: "Le Voyage d'Arion",
      auteur: "Jean Dupont",
      nombrePages: 320,
      datePublication: new Date("2025-03-05"),
      codeGenre: "0460",
      codeLot: 101
    },
    {
      id: 2,
      titre: "Les Secrets de l'Univers",
      auteur: "Claire Martin",
      nombrePages: 215,
      datePublication: new Date("2025-04-10"),
      codeGenre: "0460",
      codeLot: 102
    },
    {
      id: 3,
      titre: "Échos du passé",
      auteur: "Marc Leclerc",
      nombrePages: 198,
      datePublication: new Date("2025-03-18"),
      codeGenre: "0780",
      codeLot: 201
    },
    {
      id: 4,
      titre: "La Dernière Porte",
      auteur: "Sophie Garnier",
      nombrePages: 450,
      datePublication: new Date("2025-04-02"),
      codeGenre: "0780",
      codeLot: 202
    },
    {
      id: 5,
      titre: "Horizons Lointains",
      auteur: "Luc Moreau",
      nombrePages: 275,
      datePublication: new Date("2025-03-21"),
      codeGenre: "0460",
      codeLot: 101
    },
    {
      id: 6,
      titre: "Code et Magie",
      auteur: "Emma Lefèvre",
      nombrePages: 380,
      datePublication: new Date("2025-04-20"),
      codeGenre: "0780",
      codeLot: 202
    },
    {
      id: 7,
      titre: "La Forêt d'Argent",
      auteur: "Nicolas Robert",
      nombrePages: 290,
      datePublication: new Date("2025-04-12"),
      codeGenre: "0460",
      codeLot: 102
    },
    {
      id: 8,
      titre: "Mémoires d’un Hacker",
      auteur: "Alice Bernard",
      nombrePages: 310,
      datePublication: new Date("2025-03-01"),
      codeGenre: "0780",
      codeLot: 201
    },
    {
      id: 9,
      titre: "Lumières du Nord",
      auteur: "Thomas Renault",
      nombrePages: 240,
      datePublication: new Date("2025-03-25"),
      codeGenre: "0460",
      codeLot: 101
    },
    {
      id: 10,
      titre: "Le Chant des Étoiles",
      auteur: "Juliette Fontaine",
      nombrePages: 260,
      datePublication: new Date("2025-03-15"),
      codeGenre: "0780",
      codeLot: 201
    }
  ])


  // simulate real http service
  books$ = toObservable<Book[]>(this.books)
  
  findAll() {
    return this.books$;  
  }

  findByMonth(dto: Partial<Book>) {
    return this.books$.pipe(
      map((bs) => {
        return bs.filter(
          (b) => b.codeGenre === dto.codeGenre &&
            b.datePublication.getMonth() === dto.datePublication?.getMonth() &&
            b.datePublication.getFullYear() === dto.datePublication?.getFullYear()
        )
      })
    )
  }

}
