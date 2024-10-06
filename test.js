import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Stocker les données de l'utilisateur dans Firestore avec son UID comme ID du document
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: new Date()
    });

    console.log('User created and data stored in Firestore');
  } catch (error) {
    console.error('Error signing up:', error);
  }
}

// Exemple d'utilisation
signUp();
