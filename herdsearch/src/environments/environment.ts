// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
<<<<<<< HEAD
  production: false,
  firebase:{
    apiKey: "AIzaSyApjl6xlDQZlb9EWg3Mkyrt0G4A60rEvDY",
    authDomain: "herd-search.firebaseapp.com",
    databaseURL: "https://herd-search.firebaseio.com",
    projectId: "herd-search",
    storageBucket: "herd-search.appspot.com",
    messagingSenderId: "352023866897"
=======
  production: true,
  firebase: {
    apiKey: "...",
    authDomain: "project.firebaseapp.com",
    databaseURL: "https://project.firebaseio.com",
    projectId: "project",
    storageBucket: "project.appspot.com",
    messagingSenderId: "..."
>>>>>>> c41064f1b19561c63b31cc435a676bfd68cb7832
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
