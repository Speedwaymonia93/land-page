'use client'
import React from "react";
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { CONGRESS_TITLE_PL, CONGRESS_TITLE_DE } from '../constants/index';
import FormComponent from '../components/FormComponent';

const hotelsPL = [
  {
    name: 'Hampton by Hilton',
    address1: 'ul. Lektykarska 4',
    address2: '80-831 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'reservation@hamptongdansk.pl',
  },
  {
    name: 'Hotel ARCHE Dwór Uphagena',
    address1: 'ul. 1 Profesora Kieturakisa',
    address2: '80-742 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'rezerwacja@archedworuphagena.pl',
  },
  {
    name: 'Hotel Scandic',
    address1: 'ul. Podwale Grodzkie 9',
    address2: '80-895 Gdańsk',
    checkInOut: '16:00-12:00',
    email: 'gdansk@scandichotels.com',
  },
  {
    name: 'Hotel Prize by Radisson',
    address1: 'ul. Żabi Kruk 4',
    address2: '80-822 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'info.gdansk@prizebyradisson.com',
  },
];

const hotelsDE = [
  {
    name: 'Hampton by Hilton',
    address1: 'ul. Lektykarska 4',
    address2: '80-831 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'reservation@hamptongdansk.pl',
  },
  {
    name: 'Hotel ARCHE Dwór Uphagena',
    address1: 'ul. 1 Profesora Kieturakisa',
    address2: '80-742 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'rezerwacja@archedworuphagena.pl',
  },
  {
    name: 'Hotel Scandic',
    address1: 'ul. Podwale Grodzkie 9',
    address2: '80-895 Gdańsk',
    checkInOut: '16:00-12:00',
    email: 'gdansk@scandichotels.com',
  },
  {
    name: 'Hotel Prize by Radisson',
    address1: 'ul. Żabi Kruk 4',
    address2: '80-822 Gdańsk',
    checkInOut: '15:00-11:00',
    email: 'info.gdansk@prizebyradisson.com',
  },
];

const Congress: React.FC = () => {
  const { language } = useLanguage();
  const programHref = language === 'pl'
    ? '/GDANSK_2026_OPIS_PROGRAM_PL%20skrocony.pdf'
    : '/DANZIG_2026_PROGRAMM_DE%20skrocony.pdf';
  const hotels = language === 'pl' ? hotelsPL : hotelsDE;

  return (
    <div className="flex justify-center flex-col text-center mb-8">
      <h2 className='text-4xl text-center pb-2'>{language === 'pl' ? CONGRESS_TITLE_PL : CONGRESS_TITLE_DE}</h2>

      <div className="px-6 pt-6 pb-6 flex justify-center">
        <Image
          src="/IMG_5873.jpeg"
          alt={language === 'pl' ? 'Plakat kongresu' : 'Kongressplakat'}
          width={900}
          height={1273}
          className="w-full max-w-3xl h-auto rounded-lg shadow-md"
          priority
        />
      </div>

      <div className="mb-8">
        <a href={programHref} target="_blank" rel="noopener noreferrer">
          <button className='p-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-700 text-white font-semibold'>
            {language === 'pl' ? 'Program' : 'Programm'}
          </button>
        </a>
      </div>

      <section className="w-full max-w-3xl mx-auto text-left px-6 mb-8 space-y-4">
        <p className="text-lg font-semibold text-slate-800">
          {language === 'pl'
            ? 'Opłata za udział w Kongresie wynosi 205,00 PLN/ 49,00 € (studenci, doktoranci, licealiści 100 PLN / 25 €).'
            : 'Die Teilnahmegebühr beträgt 205,00 PLN/ 49,00 € (Studierenden / Doktoranden / Schüler 100,00 PLN / 25 €).'}
        </p>
        <p className="text-slate-700">
          {language === 'pl'
            ? 'Obejmuje ona udział w panelach dyskusyjnych, w balu oraz wyżywienie.'
            : 'Sie umfasst die Teilnahme am Kongress, am Ball sowie die Verpflegung.'}
        </p>
        <p className="text-slate-700">
          {language === 'pl'
            ? 'Opłata nie uwzględnia kosztów zakwaterowania. Uczestnikom kongresu polecamy następujące możliwości noclegu:'
            : 'Die Kosten für die Unterkunft sind nicht in der Gebühr enthalten. Wir empfehlen den Kongressteilnehmern folgende Unterkunftsmöglichkeiten:'}
        </p>

        <div className="space-y-4">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="rounded-lg border border-slate-200 p-4 bg-white">
              <p className="font-semibold text-slate-900">{hotel.name}</p>
              <p className="text-slate-700">{hotel.address1}</p>
              <p className="text-slate-700">{hotel.address2}</p>
              <p className="text-slate-700">check in/check out: {hotel.checkInOut}</p>
              <a className="text-emerald-700 hover:underline" href={`mailto:${hotel.email}`}>{hotel.email}</a>
            </div>
          ))}
        </div>
      </section>

      <h1 className="text-3xl text-center text-lime-700 mb-4 tracking-wider">
        {language === 'pl' ? 'Formularz zgłoszenia na kongres' : 'Anmeldeformular zum Kongress'}
      </h1>
      <FormComponent />
    </div>
  );
};

export default Congress;

