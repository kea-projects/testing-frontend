import { decryptObj, encryptObj } from "./CryptoUtil";

describe("checks if the encrypting utilities work as expected", () => {
  test("checks that the an object can be encrypted and properly returned as an encrypted string", () => {
    const testUserDetails = { role: "GUEST" };
    const expectedEncryptionSignature = "U2FsdGVkX1";

    const encryption = encryptObj(testUserDetails);

    expect(encryption).toContain(expectedEncryptionSignature);
  });

  test("checks that the an object can be decrypted and properly returned as an object", () => {
    const testUserDetailsEncryption =
      "U2FsdGVkX1+oT0BVdVtpSTrRhJ4/OPd6wqrAqQZjqNzq2QUvsFei9tHGq1nfGsBf";
    const expectedDecryption = { role: "GUEST" };

    const decryption = decryptObj(testUserDetailsEncryption, {});

    expect(decryption).toEqual(expectedDecryption);
  });
});
