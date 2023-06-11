export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/',
  defaultLang: 'es',
  encriptionConfig: {
    encriptionKey: 'my-secret-key',
    encriptionType: {
      base46: 'base64',
      aes: 'aes',
      des: 'des',
      rabbit: 'rabbit',
      rc4: 'rc4',
      empty: '',
    },
  },
};
