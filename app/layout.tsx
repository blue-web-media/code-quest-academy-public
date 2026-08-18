import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Code Quest Academy",description:"A hands-on coding education platform by Bleu Creative Media."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
