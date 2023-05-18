import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (email: string, pwd: string) => {
  const result = await createUserWithEmailAndPassword(auth, email, pwd)
    .then((res) => {
      return res.user;
    })
    .catch((err) => err.message);
  /*
    에러코드
    1.auth/email-already-in-use
    2.auth/weak-password
    3.auth/invalid-email
  */
  return result;
};

export const firebaseSignIn = async (email: string, pwd: string) => {
  const result = signInWithEmailAndPassword(auth, email, pwd)
    .then((res) => {
      return res.user;
    })
    .catch((err) => err.message);
  return result;
};

export const createDocInUsers = async (
  uid: string,
  userInfo: { email: string; birth: number; favoBook: string }
) => {
  const result = await setDoc(doc(db, "users", uid), {
    email: userInfo.email,
    birth: userInfo.birth,
    favoBook: userInfo.favoBook,
    joined: serverTimestamp(),
  })
    .then((res) => {
      console.log(res);
      // return res;
    })
    .catch((err) => {
      console.log(err);
      return err.code;
    });
  console.log(result);
};

export const getCollectionDoc = async (
  collectionName: string,
  docName: string
) => {
  const CollectionRef = doc(db, collectionName, docName);
  const docSnap = await getDoc(CollectionRef);
  return docSnap.data();
};

export const getCollectionAllDocs = async (collectionName: string) => {
  const CollectionRef = collection(db, collectionName);
  const docSnap = await getDocs(CollectionRef);
  const docArr = docSnap.docs.map((doc) => ({
    ...doc.data(),
  }));
  return docArr;
};
