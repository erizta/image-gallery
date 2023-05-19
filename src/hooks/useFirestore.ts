import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

type Image = {
  created_at: Date;
  user_email: string;
  image_url: string;
};

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    let snapshot: () => void;
    const getData = async () => {
      try {
        const docRef = query(
          collection(db, collectionName),
          orderBy("created_at", "desc")
        );
        snapshot = onSnapshot(docRef, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const image_url = doc.data().image_url;
            const created_at = doc.data().created_at.toDate();
            const user_email = doc.data().user_email;
            images.push({ image_url, created_at, user_email });
          });
          setDocs(images);
          setIsloading(false);
        });
      } catch (error) {
        console.log(error.message);
        setIsloading(false);
      }
    };

    getData();
    return () => snapshot && snapshot()
  }, [collectionName]);

  return { docs, isLoading };
};

export default useFirestore;
