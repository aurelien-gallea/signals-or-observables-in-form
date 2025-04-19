import { Injectable, signal } from '@angular/core';
import { toObservable } from "@angular/core/rxjs-interop";
import { Book } from '../../core/models/Book.model';
@Injectable({
  providedIn: 'root'
})
export class MyRessourceServiceService {

  

  collection: Book[] = [
    {
      id: 1,
      titre: "Le Voyage d'Arion",
      auteur: "Jean Dupont",
      nombrePages: 320,
      datePublication: new Date("2023-06-12"),
      categorie: "0460",
      codeLot: 101
    },
    {
      id: 2,
      titre: "Les Secrets de l'Univers",
      auteur: "Claire Martin",
      nombrePages: 215,
      datePublication: new Date("2024-01-22"),
      categorie: "0780",
      codeLot: 202
    },
    {
      id: 3,
      titre: "Échos du passé",
      auteur: "Marc Leclerc",
      nombrePages: 198,
      datePublication: new Date("2023-06-18"),
      categorie: "0460",
      codeLot: 101
    },
    {
      id: 4,
      titre: "La Dernière Porte",
      auteur: "Sophie Garnier",
      nombrePages: 450,
      datePublication: new Date("2024-01-17"),
      categorie: "0780",
      codeLot: 202
    },
    {
      id: 5,
      titre: "Horizons Lointains",
      auteur: "Luc Moreau",
      nombrePages: 275,
      datePublication: new Date("2023-06-25"),
      categorie: "0460",
      codeLot: 101
    },
    {
      id: 6,
      titre: "Code et Magie",
      auteur: "Emma Lefèvre",
      nombrePages: 380,
      datePublication: new Date("2024-01-05"),
      categorie: "0780",
      codeLot: 202
    },
    {
      id: 7,
      titre: "La Forêt d'Argent",
      auteur: "Nicolas Robert",
      nombrePages: 290,
      datePublication: new Date("2023-06-07"),
      categorie: "0460",
      codeLot: 101
    },
    {
      id: 8,
      titre: "Mémoires d’un Hacker",
      auteur: "Alice Bernard",
      nombrePages: 310,
      datePublication: new Date("2024-01-01"),
      categorie: "0780",
      codeLot: 202
    },
    {
      id: 9,
      titre: "Lumières du Nord",
      auteur: "Thomas Renault",
      nombrePages: 240,
      datePublication: new Date("2023-06-29"),
      categorie: "0460",
      codeLot: 101
    },
    {
      id: 10,
      titre: "Le Chant des Étoiles",
      auteur: "Juliette Fontaine",
      nombrePages: 260,
      datePublication: new Date("2024-01-08"),
      categorie: "0780",
      codeLot: 202
    }
  ]



// simulate real http service
  findAll() {
    const signalBooks = signal(this.collection)
   const values =  toObservable<Book[]>(signalBooks);
  }
}
