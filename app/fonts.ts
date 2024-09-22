import { Merienda, Roboto_Slab } from 'next/font/google'


export const robotoSlab = Roboto_Slab({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-roboto-slab"
})

export const merienda = Merienda({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-merienda"
})