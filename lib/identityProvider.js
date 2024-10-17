import fs from "fs"
import path from "path"
import { IdentityProvider } from "saml2-js"

const certsDirectory = path.resolve(process.cwd(), "certs")

export const identityProvider = new IdentityProvider({
  sso_login_url: "https://agqa.v2020.com/sso/eep/eepConnect.aspx",
  certificates: [
    fs.readFileSync(path.join(certsDirectory, "idp_key.pem")).toString()
  ]
})

export const infinexProvider = new IdentityProvider({
  sso_login_url: "",
  certificates: [
    fs.readFileSync(path.join(certsDirectory, "OsaicInfinexCert.txt")).toString()
  ]
})

export const thsProvider = new IdentityProvider({
  sso_login_url: "",
  certificates: [
    fs.readFileSync(path.join(certsDirectory, "saisaml.saionline.com.crt.txt")).toString()
  ]
})

export const americanPortfoliosProvider = new IdentityProvider({
  sso_login_url: "",
  certificates: [
    fs.readFileSync(path.join(certsDirectory, "OsaicAmericanPortfoliosCert.txt")).toString()
  ]
})

export const lincolnProvider = new IdentityProvider({
  sso_login_url: "",
  certificates: [
    fs.readFileSync(path.join(certsDirectory, "lincoln-cert.crt")).toString()
  ]
})
