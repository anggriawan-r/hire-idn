import { User } from '../model/User';
import { auth, db } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import ErrorResponse from '../error/errorResponse';

export class AuthService {
  static async signUp(
    email: string,
    password: string,
    name: string
  ): Promise<User | undefined> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        await updateProfile(user, { displayName: name });
        const userData: User = {
          userId: user.uid,
          name: name,
          email: user.email!,
        };

        await setDoc(doc(db, 'users', user.uid), userData);
        await sendEmailVerification(user);

        return userData;
      } else {
        throw new ErrorResponse(500, 'Sign up failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new ErrorResponse(400, error.message);
      }
    }
  }

  static async signIn(
    email: string,
    password: string
  ): Promise<String | undefined> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        if (user.emailVerified) {
          return await user.getIdToken();
        } else {
          throw new ErrorResponse(
            403,
            'Email not verified. Please verify your email.'
          );
        }
      } else {
        throw new ErrorResponse(500, 'Login failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new ErrorResponse(400, error.message);
      }
    }
  }
}
