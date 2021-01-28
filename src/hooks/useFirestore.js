import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config.js';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  // Function takes 'snapshot' of data at that point in time and updated when called.
  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
    // Orders images by newest first
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id})
      });
      setDocs(documents);
    });
    // Cleanup to unmount images when not used.
    return () => unsub();

  }, [collection])

  return {docs};
}

export default useFirestore;