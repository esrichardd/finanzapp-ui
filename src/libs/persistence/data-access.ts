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

export async function saveDocument(collectionName: string, data: object) {
    const docRef = await addDoc(collection(db, collectionName), data)
    return getDocument(collectionName, docRef.id)
}

export async function getDocuments(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const documents = querySnapshot.docs.map((doc) => mapDocumentToData(doc))
    return documents
}

export async function getFilteredDocuments(collectionName: string, filters: FilterDocument[]) {
    const queryConstraints: QueryFieldFilterConstraint[] = filters.map((filter) =>
        where(filter.field, filter.operator, filter.value)
    )

    const q = query(collection(db, collectionName), ...queryConstraints)
    const querySnapshot = await getDocs(q)
    const documents = querySnapshot.docs.map((doc) => mapDocumentToData(doc))

    return documents
}

export async function getDocument(collectionName: string, id: string) {
    const docRef = doc(db, collectionName, id)
    const docSnap = await getDoc(docRef)
    return docSnap.exists() ? mapDocumentToData(docSnap) : null
}

export async function updateDocument(collectionName: string, id: string, data: object) {
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, data)
    return getDocument(collectionName, id)
}

export async function deleteDocument(collectionName: string, id: string) {
    await deleteDoc(doc(db, collectionName, id))
    return true
}

const mapDocumentToData = (doc: QueryDocumentSnapshot) => {
    return { id: doc.id, ...doc.data() }
}
