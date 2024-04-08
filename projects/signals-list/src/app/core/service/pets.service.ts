/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { Pets } from '../pets';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  petsSignal = signal<Pets[]>([]);

  constructor() {}

  addPet(name: string, breed: string, imgUrl: string, careGiver: string): void {
    const newPet: Pets = {
      id: Math.random().toString(22),
      name: name,
      breed: breed,
      imageUrl: imgUrl,
      isAdopted: false,
      careGiver: careGiver,
    };
    this.petsSignal.update((pets) => [...pets, newPet]);
  }
}
