import briLiga from '../assets/liga/briLiga.png'
import EPL from '../assets/liga/EPL.png'
import laLiga from '../assets/liga/laLiga.png'
import serieA from '../assets/liga/serieA.png'
import bundesLiga from '../assets/liga/bundesLiga.png'
import ligue1 from '../assets/liga/ligue1.png'
import pemain1 from '../assets/pemain/cari-1.png'
import pemain2 from '../assets/pemain/cari-2.png'
import pemain3 from '../assets/pemain/cari-3.png'
import negara1 from '../assets/negara/cari-1.png'
import negara2 from '../assets/negara/cari-2.png'
import tim1 from '../assets/tim/cari-1.png'
import tim2 from '../assets/tim/cari-2.png'

import transfer1 from '../assets/pemain/transfer-1.png';
import dari1 from '../assets/tim/dari-1.png';
import tujuan1 from '../assets/tim/tujuan-1.png';
import transfer2 from '../assets/pemain/transfer-2.png'
import dari2 from '../assets/tim/dari-2.png'
import tujuan2 from '../assets/tim/tujuan-2.png'
import transfer3 from '../assets/pemain/transfer-3.png'
import dari3 from '../assets/tim/dari-3.png'
import tujuan3 from '../assets/tim/tujuan-3.png'
import transfer4 from '../assets/pemain/transfer-4.png'
import dari4 from '../assets/tim/dari-4.png'
import tujuan4 from '../assets/tim/tujuan-4.png'
import transfer5 from '../assets/pemain/transfer-5.png'
import dari5 from '../assets/tim/dari-5.png'
import tujuan5 from '../assets/tim/tujuan-5.png'
import transfer6 from '../assets/pemain/transfer-6.png'
import dari6 from '../assets/tim/dari-6.png'
import tujuan6 from '../assets/tim/tujuan-6.png'
import transfer7 from '../assets/pemain/transfer-7.png'
import dari7 from '../assets/tim/dari-7.png'
import tujuan7 from '../assets/tim/tujuan-7.png'
import transfer8 from '../assets/pemain/transfer-8.png'
import dari8 from '../assets/tim/dari-8.png'
import tujuan8 from '../assets/tim/tujuan-8.png'
import transfer9 from '../assets/pemain/transfer-9.png'
import transfer10 from '../assets/pemain/transfer-10.png'
import transfer11 from '../assets/pemain/transfer-11.png'
import transfer12 from '../assets/pemain/transfer-12.png'
import transfer13 from '../assets/pemain/transfer-13.png'
import transfer14 from '../assets/pemain/transfer-14.png'


export const liga = [
    {
        img: briLiga
    },
    {
        img: EPL
    },
    {
        img: laLiga
    },
    {
        img: serieA
    },
    {
        img: bundesLiga
    },
    {
        img: ligue1
    },
]

export const trends = [
    {
        name: 'Xherdan Shakiri',
        value: '34,76Mlyr.',
        negara: negara1,
        tim: tim1,
        nama_tim: 'Chicago',
        img: pemain1
    },
    {
        name: 'Maarten Paes',
        value: '26,07Mlyr.',
        negara: negara2,
        tim: tim2,
        nama_tim: 'Dallas',
        img: pemain2
    },
    {
        name: 'Lionel Messi',
        value: '450,07Mlyr.',
        negara: negara2,
        tim: tim2,
        nama_tim: 'Inter Miami',
        img: pemain3
    },
    {
        name: 'Maarten Paes',
        value: '26,07Mlyr.',
        negara: negara2,
        tim: tim2,
        nama_tim: 'Dallas',
        img: pemain2
    },
    {
        name: 'Xherdan Shakiri',
        value: '34,76Mlyr.',
        negara: negara1,
        tim: tim1,
        nama_tim: 'Chicago',
        img: pemain1
    },
]

export const transferTerakhir = [
    { player: 'Lionel Messi', position: 'Depan-Tengah', from: dari1, to: tujuan1, fee: 'Bebas Transfer', playerImage: transfer1 },
    { player: 'Gustavo Modesto', position: 'Depan-Tengah', from: dari2, to: tujuan2, fee: '15,30', milyar: 'Mlyr.', playerImage: transfer2 },
    { player: 'Young-woo Seol', position: 'Bek-Kanan', from: dari1, to: tujuan1, fee: '20,88', milyar: 'Mlyr.', playerImage: transfer14 },
    { player: 'Hidajet Hancit', position: 'Kiper', from: dari8, to: tujuan6, fee: '-', milyar: '', playerImage: transfer3 },
    { player: 'Pape Guaye', position: 'Gel. Bertahan', from: dari5, to: tujuan4, fee: '?', milyar: '', playerImage: transfer13 },
]

export const transferTop = [
    { player: 'Goncalo Ramos', position: 'Depan-Tengah', from: dari4, to: tujuan4, fee: '1.129,80', milyar:'Mlyr.', playerImage: transfer4 },
    { player: 'Vitor Roque', position: 'Depan-Tengah', from: dari5, to: tujuan5, fee: '695,27', milyar: 'Mlyr.', playerImage: transfer5 },
    { player: 'Sacha Boey', position: 'Bek-Kanan', from: dari6, to: tujuan6, fee: '521,45', milyar: 'Mlyr.', playerImage: transfer6 },
    { player: 'A. Vermaelen', position: 'Gel. Tengah', from: dari7, to: tujuan7, fee: '312,87', milyar: 'Mlyr.', playerImage: transfer7 },
    { player: 'Kalvin Phillips', position: 'Gel. Bertahan', from: dari8, to: tujuan8, fee: '121,67', milyar: 'Mlyr.', playerImage: transfer8 },
]

export const RumorData = [
    { player: 'Silvio Escobar', position: 'Persela Lamongan', to: dari6, fee: '55%', playerImage: transfer10 },
    { player: 'Jacson Tiwu', position: 'Sada Sumut FC', to: tujuan8, fee: '55%', playerImage: transfer9 },
    { player: 'Vitor Mansaray', position: 'Tanpa Klub', to: dari4, fee: '35%', playerImage: transfer2 },
    { player: 'Pedro Monteiro', position: 'Torpedo Kutiasi', to: tujuan2, fee: '50%', playerImage: transfer12 },
    { player: 'Rizky Ridho', position: 'Persija Jakarta', to: dari5, fee: '28%', playerImage: transfer11 },
  ]