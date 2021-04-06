/* eslint-disable @typescript-eslint/no-unused-vars */
const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

export const submitForm = (
  pass: string,
  repass: string,
  optionalQuestion: string,
): Promise<typeof RESPONSE_OK> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000,
    ),
  );
