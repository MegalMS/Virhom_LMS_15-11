<<<<<<< HEAD
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        try {
          const backendResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                token: account.id_token,
                role: "member",
              }),
            }
          );
          if (backendResponse.ok) {
            const backendData = await backendResponse.json();
            token.backendToken = backendData.token;
            token.backendUser = backendData.user;
          }
        } catch (error) {
          console.error("Backend authentication error:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.backendToken = token.backendToken;
      session.backendUser = token.backendUser;
      return session;
    },

    // ✅ Force redirect to LAN IP after successful login
    async redirect({ url, baseUrl }) {
      const lanBase = "http://10.27.1.244:3000";

      // Handle default NextAuth redirects
      if (url.startsWith("/")) return `${lanBase}${url}`;

      // Replace localhost in URL with LAN IP
      if (url.startsWith("http://localhost:3000")) {
        return url.replace("http://localhost:3000", lanBase);
      }

      return lanBase; // fallback
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
=======
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile }) {
//       if (account && profile) {
//         try {
//           const backendResponse = await fetch(
//             `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 token: account.id_token,
//                 role: "member",
//               }),
//             }
//           );
//           if (backendResponse.ok) {
//             const backendData = await backendResponse.json();
//             token.backendToken = backendData.token;
//             token.backendUser = backendData.user;
//           }
//         } catch (error) {
//           console.error("Backend authentication error:", error);
//         }
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.backendToken = token.backendToken;
//       session.backendUser = token.backendUser;
//       return session;
//     },

//     // ✅ Force redirect to LAN IP after successful login
//     async redirect({ url, baseUrl }) {
//       const lanBase = "http://10.27.1.244:3000";

//       // Handle default NextAuth redirects
//       if (url.startsWith("/")) return `${lanBase}${url}`;

//       // Replace localhost in URL with LAN IP
//       if (url.startsWith("http://localhost:3000")) {
//         return url.replace("http://localhost:3000", lanBase);
//       }

//       return lanBase; // fallback
//     },
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: process.env.NODE_ENV === "development",
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
>>>>>>> 6ea70ac4296d48ad876512a4daafb839a8550fef


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";


// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile }) {
//       // Initial sign in
//       if (account && profile) {
//         try {
//           // Send Google token to your backend
//           const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               token: account.id_token,
//               role: "member", // You can make this dynamic
//             }),
//           });

//           if (backendResponse.ok) {
//             const backendData = await backendResponse.json();
//             token.backendToken = backendData.token;
//             token.backendUser = backendData.user;
//           } else {
//             console.error("Backend auth failed:", await backendResponse.text());
//           }
//         } catch (error) {
//           console.error("Backend authentication error:", error);
//         }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.backendToken = token.backendToken;
//       session.backendUser = token.backendUser;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
//   debug: process.env.NODE_ENV === "development",
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };