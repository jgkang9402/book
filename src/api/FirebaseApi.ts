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
  userInfo: { email: string; name: string; birth: number; favoBook: string }
) => {
  const result = await setDoc(doc(db, "users", uid), {
    email: userInfo.email,
    name: userInfo.name,
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
export const createDocInReport = async (
  uid: string,
  // report: { title: string; content: string }
  reportData: {
    title: string;
    content: string;
    bookName: string;
    isbn: string;
    cover: string;
    // title: string;
    // content: string;
    // bookName: string;
    // bookIsbn: string;
    // bookImg: string;
  }
) => {
  const prevArr = await getCollectionDoc("reportList", uid);
  // 현재는 prevArr을 쓰고있지만 나중엔 파라미터로 리덕스에 저장되있는 나의 데이터를 보내어 prevArr을 쓸것.
  const result = await setDoc(doc(db, "reportList", uid), {
    ...prevArr,
    [reportData.title]: {
      pubDate: serverTimestamp(),
      ...reportData,
    },
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

  /*  */
  // const result = await setDoc(doc(db, "reportList", uid), {
  //   [reportData.title]: {
  //     pubDate: serverTimestamp(),
  //     ...reportData,
  //   },
  // })
  //   // const result = await setDoc(doc(db, "reportList", uid), {
  //   //   pubDate: serverTimestamp(),
  //   //   ...reportData,
  //   // })
  //   .then((res) => {
  //     console.log(res);
  //     // return res;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return err.code;
  //   });
  // console.log(result);
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
