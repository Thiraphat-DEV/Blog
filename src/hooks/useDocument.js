import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          // use spread operator for copy data to document
          setDocument({
             ...snapshot.data(),
            id: snapshot.id,
          });
          setError(null);
        } else {
          setError("No such should be Document is exists");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get Document from firestore");
      }
    );
    //clean up function unsub with fetch data Only necessary
    return () => unsub();
    //chnage every time with collection and id to changed
  }, [collection, id]);

  return { document, error };
};
