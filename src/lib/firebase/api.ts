import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db, storage } from "./config";
import { INewUser, PostProps } from "../../types/index";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function createUser({ userData }: { userData: INewUser }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = userCredential.user;
    console.log("User created:", user);

    const userDoc = {
      username: userData.username,
      email: userData.email,
      name: userData.name,
    };

    console.log("Writing user document to Firestore:", userDoc);

    await setDoc(doc(db, "users", user.uid), userDoc);

    console.log("Successfully signed up and added user to Firestore! ✅");
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) return user;
    console.log("No user data found in Firestore");
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}
export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
export async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            resolve(userDocSnap.data());
          } else {
            console.log("No User Document!");
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  });
}
export async function createPost(post: PostProps) {
  const imageUrl = await uploadImage(post.file[0]);
  if (!imageUrl) {
    // await deleteFile(uploadedFile.$id);
    throw new Error("Failed to get file URL");
  }
  onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      const userId = currentUser.uid;
      try {
        const postWithDetails = {
          ...post,
          file: imageUrl,
          imageUrl: imageUrl,
          userId,
        };
        const docRef = await addDoc(collection(db, "posts"), postWithDetails);
        if (docRef) {
          console.log("Document written with ID: ", docRef.id);
        }
        return true;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
}
export async function uploadImage(file: File) {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);
  return imageUrl;
}
export async function getRecentPosts() {
  try {
    const posts: PostProps[] = [];
    const postCollectionRef = collection(db, "posts");
    const data = await getDocs(postCollectionRef);
    posts.push(...data.docs.map((doc) => ({ ...doc.data() } as PostProps)));
    return posts;
  } catch (error) {
    console.log("error");
  }
}
