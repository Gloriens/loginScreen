import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Google fontları doğru import et
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { Head } from "next/document"; // Head bileşenini ekle

// Google fontları burada import ediyoruz
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            {/* Geist fontunu burada manuel olarak ekleyebilirsin, eğer kullanıyorsan */}
            <link href="https://fonts.googleapis.com/css2?family=Geist&display=swap" rel="stylesheet" />
        </Head>
        <body className={inter.className}> {/* Burada Inter fontunu body'ye uygula */}
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}

//slider --> içinde image ler var
//slider hazırlandı, slider bir component, image de bir component
//slider componentinin içine image i childiren olaran koydum
//özetle bir sliderım var, içine childerin koyacak şekilde ayarlıyorum


