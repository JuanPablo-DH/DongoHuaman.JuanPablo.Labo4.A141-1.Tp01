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
  constructor(private firestore: Firestore) {}

  insertar(dato: any, bd: string) {
    try {
      const colRef = collection(this.firestore, bd);
      addDoc(colRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.insertar()', e);
    }
  }

  insertarConId(id: string, dato: any, bd: string) {
    try {
      const docuRef = doc(this.firestore, bd + `/${id}`);
      setDoc(docuRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.insertarConId()', e);
    }
  }

  traerTodos(bd: string) {
    try {
      const colRef = collection(this.firestore, bd);
      return collectionData(colRef);
    } catch (e) {
      console.log('error StoreUsuarioService.traerTodos()', e);
    }
    return;
  }

  traerPorId(id: string, bd: string) {
    try {
      const colRef = collection(this.firestore, bd);
      const docRef = doc(colRef, id);
      return docData(docRef);
    } catch (e) {
      console.log('error StoreUsuarioService.traerPorId()', e);
    }
    return;
  }

  eliminar(id: string, bd: string) {
    try {
      const colRef = collection(this.firestore, bd);
      const docRef = doc(colRef, id);
      deleteDoc(docRef);
    } catch (e) {
      console.log('error StoreUsuarioService.eliminar()', e);
    }
  }

  modificar(id: string, dato: any, bd: string) {
    try {
      const colRef = collection(this.firestore, bd);
      const docRef = doc(colRef, id);
      updateDoc(docRef, dato);
    } catch (e) {
      console.log('error StoreUsuarioService.modificar()', e);
    }
  }
}
