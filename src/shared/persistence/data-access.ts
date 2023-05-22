import {
    collection,
    addDoc,
    updateDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    QueryFieldFilterConstraint,
    QueryDocumentSnapshot,
    deleteDoc,
} from 'firebase/firestore'
import db from './config'
import { FilterDocument } from './types'

export function saveDocument(collectionName: string, data: object) {
    return addDoc(collection(db, collectionName), data).then((docRef) => {
        return getDocument(collectionName, docRef.id)
    })
}

export function getDocuments(collectionName: string) {
    return getDocs(collection(db, collectionName)).then((querySnapshot) => {
        const documents: object[] = []
        querySnapshot.forEach((doc) => {
            documents.push(mapDocumentToData(doc))
        })

        return documents
    })
}

export function getFilteredDocuments(collectionName: string, filters: FilterDocument[]) {
    const queryConstraints: QueryFieldFilterConstraint[] = []
    filters.forEach((filter) => {
        queryConstraints.push(where(filter.field, filter.operator, filter.value))
    })

    const q = query(collection(db, collectionName), ...queryConstraints)
    return getDocs(q).then((querySnapshot) => {
        const documents: object[] = []
        querySnapshot.forEach((doc) => {
            documents.push(mapDocumentToData(doc))
        })

        return documents
    })
}

export function getDocument(collectionName: string, id: string) {
    const docRef = doc(db, collectionName, id)
    return getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) return mapDocumentToData(docSnap)
        else return null
    })
}

export function updateDocument(collectionName: string, id: string, data: object) {
    const docRef = doc(db, collectionName, id)
    return updateDoc(docRef, data).then(() => {
        return getDocument(collectionName, id)
    })
}

export function deleteDocument(collectionName: string, id: string) {
    return deleteDoc(doc(db, collectionName, id)).then(() => {
        return true
    })
}

const mapDocumentToData = (doc: QueryDocumentSnapshot) => {
    return { id: doc.id, ...doc.data() }
}
