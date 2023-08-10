import { firestore } from "../../firebase-config.js";
import { collection,getDocs, doc,getDoc } from "firebase/firestore";
export const getAllProducts = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "products"));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
}

export const getSingleProduct = async (id) => {
    const documentSnapshot = await getDoc(doc(collection(firestore,"products"),id));
    return documentSnapshot.data();
}