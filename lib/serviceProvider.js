import fs from "fs"
import path from "path"
import { ServiceProvider } from "saml2-js"

const certsDirectory = path.resolve(process.cwd(), "certs")

export const serviceProvider = new ServiceProvider({
  entity_id: process.env.NEXTAUTH_URL,
  private_key: process.env.PRIVATE_KEY,
  certificate: fs.readFileSync(path.join(certsDirectory, "cert.pem")).toString(),
  assert_endpoint: `${process.env.NEXTAUTH_URL}/api/auth/signin/saml`,
  allow_unencrypted_assertion: true,
})

export const infinexServiceProvider = new ServiceProvider({
  entity_id: process.env.NEXTAUTH_URL,
  private_key: process.env.PRIVATE_KEY,
  certificate: fs.readFileSync(path.join(certsDirectory, "cert.pem")).toString(),
  assert_endpoint: `${process.env.URL}/api/auth/signin/infinex`,
  allow_unencrypted_assertion: true,
})

export const thsServiceProvider = new ServiceProvider({
  entity_id: process.env.NEXTAUTH_URL,
  private_key: process.env.PRIVATE_KEY,
  certificate: fs.readFileSync(path.join(certsDirectory, "cert.pem")).toString(),
  assert_endpoint: `${process.env.URL}/api/auth/signin/ths`,
  allow_unencrypted_assertion: true,
})

export const americanPortfoliosServiceProvider = new ServiceProvider({
  entity_id: process.env.NEXTAUTH_URL,
  private_key: process.env.PRIVATE_KEY,
  certificate: fs.readFileSync(path.join(certsDirectory, "cert.pem")).toString(),
  assert_endpoint: `${process.env.URL}/api/auth/signin/ap`,
  allow_unencrypted_assertion: true,
})

export const lincolnServiceProvider = new ServiceProvider({
  entity_id: process.env.NEXTAUTH_URL,
  private_key: process.env.PRIVATE_KEY,
  certificate: fs.readFileSync(path.join(certsDirectory, "cert.pem")).toString(),
  assert_endpoint: `${process.env.URL}/api/auth/signin/lincoln`,
  allow_unencrypted_assertion: true,
})
