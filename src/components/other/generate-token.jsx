import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  sub: '1234567890',
  name: 'David Madrid',
  iat: 1516239022,
};

const jwtSecret = 'secret123';

const encodingReplacements = {
  '+': '-',
  '/': '_',
  '=': '',
};

const makeUrlSafe = (encoded) => {
  return encoded.replace(/[+/=]/g, (match) => encodingReplacements[match]);
};

const encode = (obj) => {
  const str = JSON.stringify(obj);
  const buf = Buffer.from(str, 'utf-8');
  const encoded = buf.toString('base64');
  return encoded;
};

const makeSignature = (header, payload, secret) => {
  const hashed = HmacSHA256(`${encode(header)}.${encode(payload)}`, secret);
  const stringified = Base64.stringify(hashed);
  return makeUrlSafe(stringified);
};

const getJwt = (header, payload, signature) => {
  return `${header}.${payload}.${signature}`;
};

getJwt(
  encode(header),
  encode(payload),
  makeSignature(header, payload, jwtSecret)
);
