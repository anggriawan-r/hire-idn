import admin from 'firebase-admin';
const path =
  '/home/anggri/Documents/hire-idn-test-firebase-adminsdk-9tlgb-d907f80740.json';

const serviceAccount = require(path);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const dbAdmin = admin.firestore();
const authAdmin = admin.auth();

export { admin, dbAdmin, authAdmin };
