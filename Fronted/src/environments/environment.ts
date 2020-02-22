// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BackendUrl: `http://192.168.88.5:4000`,
  firebaseConfig: {
    apiKey: "AIzaSyAPPeW3AT4ssuK76jfCggQa_lINxk4vHr4",
    authDomain: "myapp-a5ac5.firebaseapp.com",
    databaseURL: "https://myapp-a5ac5.firebaseio.com",
    projectId: "myapp-a5ac5",
    storageBucket: "myapp-a5ac5.appspot.com",
    messagingSenderId: "468955788493",
    appId: "1:468955788493:web:eec3d4019f063ac0786584"
  }
};
