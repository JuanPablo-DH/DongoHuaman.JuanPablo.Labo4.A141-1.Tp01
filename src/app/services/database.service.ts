import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private bd: string = '';

  constructor(private firestore: Firestore) {}

  setBd(bd: string) {
    this.bd = bd;
  }

  insertar(dato: any) {
    try {
      const colRef = collection(this.firestore, this.bd);
      addDoc(colRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.insertar()', e);
    }
  }

  insertarConId(id: string, dato: any) {
    try {
      const docuRef = doc(this.firestore, this.bd + `/${id}`);
      setDoc(docuRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.insertarConId()', e);
    }
  }

  traerTodos() {
    try {
      const colRef = collection(this.firestore, this.bd);
      return collectionData(colRef);
    } catch (e) {
      console.log('error StoreUsuarioService.traerTodos()', e);
    }
    return;
  }

  traerPorId(id: string) {
    try {
      const colRef = collection(this.firestore, this.bd);
      const docRef = doc(colRef, id);
      return docData(docRef);
    } catch (e) {
      console.log('error StoreUsuarioService.traerPorId()', e);
    }
    return;
  }

  eliminar(id: string) {
    try {
      const colRef = collection(this.firestore, this.bd);
      const docRef = doc(colRef, id);
      deleteDoc(docRef);
    } catch (e) {
      console.log('error StoreUsuarioService.eliminar()', e);
    }
  }

  modificar(id: string, dato: any) {
    try {
      const colRef = collection(this.firestore, this.bd);
      const docRef = doc(colRef, id);
      updateDoc(docRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.modificar()', e);
    }
  }
}
