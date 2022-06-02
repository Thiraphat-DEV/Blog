import { useState, useEffect } from "react";
import { projectAuth, projectStorage, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumnail) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }
      //upload thumnail profile
      // firebase create folder `thumnail`
      const uploadPath = `thumnails/${res.user.uid}/${thumnail.name}`; //create path of image
      const image = await projectStorage.ref(uploadPath).put(thumnail);

      //create imageUrl for upload to storage firebase
      const imageUrl = await image.ref.getDownloadURL();
      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: imageUrl });
      //create user Documents and add id user to firebaseStorage
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imageUrl,

      });
      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
