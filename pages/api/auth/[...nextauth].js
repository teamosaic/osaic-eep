import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { americanPortfoliosProvider,identityProvider, infinexProvider, lincolnProvider, thsProvider } from "~/lib/identityProvider"
import { americanPortfoliosServiceProvider,infinexServiceProvider, lincolnServiceProvider, serviceProvider, thsServiceProvider } from "~/lib/serviceProvider"

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentialsTRI',
      name: "Credentials TRI",
      async authorize(credentials, req) {
        // HOME OFFICE USER
        const user = {
          name_id: 'sjstark1',
          session_index: 'sftgfez2mbkbk2jblq32ucfc',
          session_not_on_or_after: '2023-06-22T05:37:28Z',
          attributes: {
            UserID: [ 'sjstark1' ],
            FirstName: [ 'Sam' ],
            LastName: [ 'Stark' ],
            UserType: [ 'FO' ],
            BDID: [ '21' ],
            SPECIALUSER: [ 'Y' ]
          }
        }
        return user
      }
    }),
    CredentialsProvider({
      id: 'credentialsTHS',
      name: "Credentials THS",
      async authorize(credentials, req) {
        // HOME OFFICE USER
        const user = {
          name_id: 'sjstark1',
          session_index: 'sftgfez2mbkbk2jblq32ucfc',
          session_not_on_or_after: '2023-06-22T05:37:28Z',
          attributes: {
            UserID: [ 'sjstark2' ],
            FirstName: [ 'Sam' ],
            LastName: [ 'Stark' ],
            UserType: [ 'FO' ],
            BDID: [ '22' ],
            SPECIALUSER: [ 'N' ]
          }
        }

        return user
      }
    }),
    CredentialsProvider({
      id: 'credentials',
      name: "Credentials",
      async authorize(credentials, req) {
        // HOME OFFICE USER
        const user = {
          name_id: 'snandi',
          session_index: 'sftgfez2mbkbk2jblq32ucfc',
          session_not_on_or_after: '2023-06-22T05:37:28Z',
          attributes: {
            UserID: [ 'snandi' ],
            FirstName: [ 'Saugata' ],
            LastName: [ 'Nandi' ],
            UserType: [ 'HO' ],
            BDID: [ '' ],
            SPECIALUSER: [ 'Y' ]
          }
        }

        return user
      }
    }),
    CredentialsProvider({
      id: "saml",
      name: "SAML",
      async authorize({samlBody}) {

        samlBody = JSON.parse(decodeURIComponent(samlBody))

        const postAssert = (identityProvider, samlBody) =>
          new Promise((resolve, reject) => {
            serviceProvider.post_assert(
              identityProvider,
              {
                request_body: samlBody
              },
              (error, response) => {
                if (error) {
                  reject(error)
                }
                resolve(response)
              }
            )
          })

        const { user } = await postAssert(identityProvider, samlBody)
        console.log(user)
        return user
      }
    }),
    CredentialsProvider({
      id: "infinex",
      name: "Infinex",
      async authorize({samlBody}) {

        samlBody = JSON.parse(decodeURIComponent(samlBody))

        const postAssert = (infinexProvider, samlBody) =>
          new Promise((resolve, reject) => {
            infinexServiceProvider.post_assert(
              infinexProvider,
              {
                request_body: samlBody
              },
              (error, response) => {
                if (error) {
                  reject(error)
                }
                resolve(response)
              }
            )
          })

        const { user } = await postAssert(infinexProvider, samlBody)
        console.log(user)
        return user
      }
    }),
    CredentialsProvider({
      id: "ths",
      name: "THS",
      async authorize(data) {
        let { samlBody } = data
        samlBody = JSON.parse(decodeURIComponent(samlBody))

        const postAssert = (thsProvider, samlBody) =>
          new Promise((resolve, reject) => {
            thsServiceProvider.post_assert(
              thsProvider,
              {
                request_body: samlBody
              },
              (error, response) => {
                if (error) {
                  reject(error)
                }
                resolve(response)
              }
            )
          })

        const { user } = await postAssert(thsProvider, samlBody)
        // Grab relay state which should be our destination and add to user to
        // be used by middleware.ts
        user.destination = samlBody?.RelayState || null
        console.log(user)
        return user
      }
    }),
    CredentialsProvider({
      id: "ap",
      name: "American Portfolios",
      async authorize({samlBody}) {

        samlBody = JSON.parse(decodeURIComponent(samlBody))

        const postAssert = (americanPortfoliosProvider, samlBody) =>
          new Promise((resolve, reject) => {
            americanPortfoliosServiceProvider.post_assert(
              americanPortfoliosProvider,
              {
                request_body: samlBody
              },
              (error, response) => {
                if (error) {
                  reject(error)
                }
                resolve(response)
              }
            )
          })

        const { user } = await postAssert(americanPortfoliosProvider, samlBody)
        console.log(user)
        return user
      }
    }),
    CredentialsProvider({
      id: "lincoln",
      name: "Lincoln",
      async authorize({samlBody}) {

        samlBody = JSON.parse(decodeURIComponent(samlBody))

        const postAssert = (lincolnProvider, samlBody) =>
          new Promise((resolve, reject) => {
            lincolnServiceProvider.post_assert(
              lincolnProvider,
              {
                request_body: samlBody
              },
              (error, response) => {
                if (error) {
                  reject(error)
                }
                resolve(response)
              }
            )
          })

        const { user } = await postAssert(lincolnProvider, samlBody)

        // Grab relay state which should be our destination and add to user to
        // be used by middleware.ts
        user.destination = samlBody?.RelayState || null
        console.log(user)
        return user
      }
    }),
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async redirect({url, baseUrl}) {
      return '/welcome'
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user

        // Set the BDID on the token
        let bdid = user.attributes.BDID[0]
        if (user.attributes.UserType[0] === 'HO') {
          bdid = 1 // Set HO user to RAA by default
        }
        token.bdID = bdid
      }

      // Check if the bdID was updated
      if (trigger === "update" && session?.bdID) {
        token.bdID = session.bdID
      }
      return token
    },
    async session({ session, user, token }) {
      if (!session.user) { session.user = {} }
      session.user.id = token.id
      session.user = token.user
      session.bdID = token.bdID
      return session
    }
  }
})
