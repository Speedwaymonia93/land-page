'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import Image from 'next/image';
import loading from '../../public/loading.png';
import { useLanguage } from '../context/LanguageContext';

interface FormValues {
  imie: string;
  nazwisko: string;
  student: string;
  organizacja: string;
  vegetarianin: string;
  oprowadzanie: string;
  panelSobotaRanoPierwszyWybor: string;
  panelSobotaRanoDrugiWybor: string;
  panelSobotaPopoludniuPierwszyWybor: string;
  panelSobotaPopoludniuDrugiWybor: string;
  zwiedzanieEcsNiedziela: string;
  bal: string;
  uwagi?: string;
}

const morningPanelsPL = [
  'Panel IIIA: „Partnerzy i konkurenci: jak Polska i Niemcy mogą wzmacniać konkurencyjność Europy?”',
  'Panel IIIB: „Między historią a przyszłością: zadośćuczynienie i odpowiedzialność - co jest dziś możliwe?”',
  'Panel IIIC (młodzieżowy): „Forum Młodych ‘Europa 2050’: czego młodzi oczekują od Polski i Niemiec?”',
];

const morningPanelsDE = [
  'Panel IIIA: „Partner und Konkurrenten: Wie können Polen und Deutschland die Wettbewerbsfähigkeit Europas stärken?”',
  'Panel IIIB: „Zwischen Geschichte und Zukunft: Wiedergutmachung und Verantwortung - was ist heute möglich?”',
  'Panel IIIC (Jugendpanel): „Jugendforum \"Europa 2050\": Was erwarten junge Menschen von Polen und Deutschland?”',
];

const afternoonPanelsPL = [
  'Panel IVA: „Europa Środkowa na zakręcie: jak odbudować zdolność do współpracy? Perspektywy Polski, Niemiec i Węgier”',
  'Panel IVB: „Bałtyk jako laboratorium bezpieczeństwa Europy: co Polska i Niemcy mogą zrobić wspólnie?”',
  'Panel IVC: „Prawica, protest, zmiana: czego wyborcy w Polsce i Niemczech oczekują od demokracji?”',
  'Panel IVD: „Nauka dla dialogu: jak germanistyka, niemcoznawstwo i sieci akademickie mogą wspierać współpracę polsko-niemiecką?”',
];

const afternoonPanelsDE = [
  'Panel IVA: „Mitteleuropa am Scheideweg: Wie kann die Fähigkeit zur Zusammenarbeit wiederaufgebaut werden? Perspektiven Polens, Deutschlands und Ungarns”',
  'Panel IVB: „Die Ostsee als Sicherheitslabor Europas: Was können Polen und Deutschland gemeinsam tun?”',
  'Panel IVC: „Rechte, Protest, Wandel: Was erwarten Wähler in Polen und Deutschland von der Demokratie?”',
  'Panel IVD: „Wissenschaft für den Dialog: Wie können Germanistik, Deutschlandstudien und akademische Netzwerke die deutsch-polnische Zusammenarbeit stärken?”',
];

const validationSchemaPL = Yup.object<FormValues>().shape({
  imie: Yup.string().required('Imię jest wymagane'),
  nazwisko: Yup.string().required('Nazwisko jest wymagane'),
  student: Yup.string().required('Wybór jest wymagany'),
  organizacja: Yup.string().required('Organizacja / Instytucja jest wymagana'),
  vegetarianin: Yup.string().required('Wybór jest wymagany'),
  oprowadzanie: Yup.string().required('Wybór jest wymagany'),
  panelSobotaRanoPierwszyWybor: Yup.string().required('Wybór jest wymagany'),
  panelSobotaRanoDrugiWybor: Yup.string()
    .required('Wybór jest wymagany')
    .notOneOf([Yup.ref('panelSobotaRanoPierwszyWybor')], 'Drugi wybór musi być inny niż pierwszy'),
  panelSobotaPopoludniuPierwszyWybor: Yup.string().required('Wybór jest wymagany'),
  panelSobotaPopoludniuDrugiWybor: Yup.string()
    .required('Wybór jest wymagany')
    .notOneOf([Yup.ref('panelSobotaPopoludniuPierwszyWybor')], 'Drugi wybór musi być inny niż pierwszy'),
  zwiedzanieEcsNiedziela: Yup.string().required('Wybór jest wymagany'),
  bal: Yup.string().required('Wybór jest wymagany'),
  uwagi: Yup.string().optional(),
});

const validationSchemaDE = Yup.object<FormValues>().shape({
  imie: Yup.string().required('Vorname ist erforderlich'),
  nazwisko: Yup.string().required('Nachname ist erforderlich'),
  student: Yup.string().required('Bitte wählen Sie eine Option'),
  organizacja: Yup.string().required('Organisation / Institution ist erforderlich'),
  vegetarianin: Yup.string().required('Bitte wählen Sie eine Option'),
  oprowadzanie: Yup.string().required('Bitte wählen Sie eine Option'),
  panelSobotaRanoPierwszyWybor: Yup.string().required('Bitte wählen Sie eine Option'),
  panelSobotaRanoDrugiWybor: Yup.string()
    .required('Bitte wählen Sie eine Option')
    .notOneOf([Yup.ref('panelSobotaRanoPierwszyWybor')], 'Die zweite Auswahl muss sich von der ersten unterscheiden'),
  panelSobotaPopoludniuPierwszyWybor: Yup.string().required('Bitte wählen Sie eine Option'),
  panelSobotaPopoludniuDrugiWybor: Yup.string()
    .required('Bitte wählen Sie eine Option')
    .notOneOf([Yup.ref('panelSobotaPopoludniuPierwszyWybor')], 'Die zweite Auswahl muss sich von der ersten unterscheiden'),
  zwiedzanieEcsNiedziela: Yup.string().required('Bitte wählen Sie eine Option'),
  bal: Yup.string().required('Bitte wählen Sie eine Option'),
  uwagi: Yup.string().optional(),
});

const FormComponent: React.FC = () => {
  const { language } = useLanguage();
  const morningPanels = language === 'pl' ? morningPanelsPL : morningPanelsDE;
  const afternoonPanels = language === 'pl' ? afternoonPanelsPL : afternoonPanelsDE;
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: language === 'pl' ? yupResolver(validationSchemaPL) : yupResolver(validationSchemaDE),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmissionStatus('waiting');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      setSubmissionStatus('sent');
      reset();
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <>
      <div className='py-6 px-6 flex justify-center mb-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-10 md:w-1/2">
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Imię:' : 'Vorname:'}</label>
            <input type="text" {...register('imie')} placeholder={language === 'pl' ? 'Imię' : 'Vorname'} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.imie && <p className="text-red-500">{errors.imie.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Nazwisko:' : 'Nachname:'}</label>
            <input type="text" {...register('nazwisko')} placeholder={language === 'pl' ? 'Nazwisko' : 'Nachname'} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.nazwisko && <p className="text-red-500">{errors.nazwisko.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Student:' : 'Student:'}</label>
            <div className='flex flex-row gap-6 mt-2'>
              <label className='flex items-center'><input className="mr-2" type="radio" value="TAK" {...register('student')} /> {language === 'pl' ? 'TAK' : 'JA'}</label>
              <label className='flex items-center'><input className="mr-2" type="radio" value="NIE" {...register('student')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</label>
            </div>
            {errors.student && <p className="text-red-500">{errors.student.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Organizacja / Instytucja:' : 'Organisation / Institution:'}</label>
            <input type="text" {...register('organizacja')} placeholder={language === 'pl' ? 'Organizacja / Instytucja' : 'Organisation / Institution'} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.organizacja && <p className="text-red-500">{errors.organizacja.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Vegetarianin:' : 'Vegetarisch:'}</label>
            <div className='flex flex-row gap-6 mt-2'>
              <label className='flex items-center'><input className="mr-2" type="radio" value="TAK" {...register('vegetarianin')} /> {language === 'pl' ? 'TAK' : 'JA'}</label>
              <label className='flex items-center'><input className="mr-2" type="radio" value="NIE" {...register('vegetarianin')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</label>
            </div>
            {errors.vegetarianin && <p className="text-red-500">{errors.vegetarianin.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Oprowadzanie w piątek:' : 'Stadtführung am Freitag:'}</label>
            <div className='flex flex-row gap-6 mt-2'>
              <label className='flex items-center'><input className="mr-2" type="radio" value="TAK" {...register('oprowadzanie')} /> {language === 'pl' ? 'TAK' : 'JA'}</label>
              <label className='flex items-center'><input className="mr-2" type="radio" value="NIE" {...register('oprowadzanie')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</label>
            </div>
            {errors.oprowadzanie && <p className="text-red-500">{errors.oprowadzanie.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Panele sobota rano (do wyboru):' : 'Panels Samstagvormittag (Auswahl):'}</label>
            <p className="text-lime-600 mt-2">{language === 'pl' ? 'Panel pierwszego wyboru' : 'Panel erste Wahl'}</p>
            <select {...register('panelSobotaRanoPierwszyWybor')} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2">
              <option value="">{language === 'pl' ? 'Wybierz panel' : 'Panel auswählen'}</option>
              {morningPanels.map((panel) => (
                <option key={panel} value={panel}>{panel}</option>
              ))}
            </select>
            {errors.panelSobotaRanoPierwszyWybor && <p className="text-red-500">{errors.panelSobotaRanoPierwszyWybor.message}</p>}

            <p className="text-lime-600 mt-4">{language === 'pl' ? 'Panel drugiego wyboru' : 'Panel zweite Wahl'}</p>
            <select {...register('panelSobotaRanoDrugiWybor')} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2">
              <option value="">{language === 'pl' ? 'Wybierz panel' : 'Panel auswählen'}</option>
              {morningPanels.map((panel) => (
                <option key={`${panel}-second`} value={panel}>{panel}</option>
              ))}
            </select>
            {errors.panelSobotaRanoDrugiWybor && <p className="text-red-500">{errors.panelSobotaRanoDrugiWybor.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Panele sobota popołudniu (do wyboru):' : 'Panels Samstagnachmittag (Auswahl):'}</label>
            <p className="text-lime-600 mt-2">{language === 'pl' ? 'Panel pierwszego wyboru' : 'Panel erste Wahl'}</p>
            <select {...register('panelSobotaPopoludniuPierwszyWybor')} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2">
              <option value="">{language === 'pl' ? 'Wybierz panel' : 'Panel auswählen'}</option>
              {afternoonPanels.map((panel) => (
                <option key={panel} value={panel}>{panel}</option>
              ))}
            </select>
            {errors.panelSobotaPopoludniuPierwszyWybor && <p className="text-red-500">{errors.panelSobotaPopoludniuPierwszyWybor.message}</p>}

            <p className="text-lime-600 mt-4">{language === 'pl' ? 'Panel drugiego wyboru' : 'Panel zweite Wahl'}</p>
            <select {...register('panelSobotaPopoludniuDrugiWybor')} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2">
              <option value="">{language === 'pl' ? 'Wybierz panel' : 'Panel auswählen'}</option>
              {afternoonPanels.map((panel) => (
                <option key={`${panel}-second`} value={panel}>{panel}</option>
              ))}
            </select>
            {errors.panelSobotaPopoludniuDrugiWybor && <p className="text-red-500">{errors.panelSobotaPopoludniuDrugiWybor.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Zwiedzanie ECS niedziela:' : 'Besichtigung der ECS am Sonntag:'}</label>
            <div className='flex flex-row gap-6 mt-2'>
              <label className='flex items-center'><input className="mr-2" type="radio" value="TAK" {...register('zwiedzanieEcsNiedziela')} /> {language === 'pl' ? 'TAK' : 'JA'}</label>
              <label className='flex items-center'><input className="mr-2" type="radio" value="NIE" {...register('zwiedzanieEcsNiedziela')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</label>
            </div>
            {errors.zwiedzanieEcsNiedziela && <p className="text-red-500">{errors.zwiedzanieEcsNiedziela.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Bal/Ball:' : 'Ball:'}</label>
            <div className='flex flex-row gap-6 mt-2'>
              <label className='flex items-center'><input className="mr-2" type="radio" value="TAK" {...register('bal')} /> {language === 'pl' ? 'TAK' : 'JA'}</label>
              <label className='flex items-center'><input className="mr-2" type="radio" value="NIE" {...register('bal')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</label>
            </div>
            {errors.bal && <p className="text-red-500">{errors.bal.message}</p>}
          </div>

          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Uwagi:' : 'Bemerkungen:'}</label>
            <textarea {...register('uwagi')} placeholder={language === 'pl' ? 'Uwagi' : 'Bemerkungen'} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2 h-32 resize-none" maxLength={500} />
            {errors.uwagi && <p className="text-red-500">{errors.uwagi.message}</p>}
          </div>

          <button type="submit" className="w-full m-3 border rounded-lg border-lime-600 py-3 px-6 bg-lime-700 text-white font-bold hover:bg-lime-900 hover:text-gray-200">
            {language === 'pl' ? 'Wyślij zgłoszenie' : 'Anmeldung senden'}
          </button>
        </form>
      </div>

      <div className="text-center pb-4 flex justify-center mb-5">
        {submissionStatus === 'sent' && (
          <div className='flex flex-col items-center'>
            <AiFillCheckCircle className='ml-3 text-lime-500 text-4xl bg-white rounded-full' />
            <p className="text-emerald-600 font-bold text-xl my-2">{language === 'pl' ? 'Dziękujemy za rejestrację.' : 'Vielen Dank für Ihre Anmeldung.'}</p>
          </div>
        )}
        {submissionStatus === 'waiting' && (
          <div className='flex flex-col items-center'>
            <Image width={50} src={loading} height={50} alt={language === 'pl' ? 'Wysyłanie wiadomości' : 'Nachricht wird gesendet'} />
            <p className="text-indigo-600 font-bold text-xl my-2">{language === 'pl' ? 'Wysyłanie trwa' : 'Senden läuft'}</p>
            <p className="text-indigo-600 font-semibold text-lg">{language === 'pl' ? 'Prosimy o cierpliwość' : 'Bitte haben Sie Geduld'}</p>
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className='flex flex-row items-center'>
            <p className="font-bold text-xl my-2">{language === 'pl' ? 'Oops! Coś poszło nie tak, odśwież stronę i spróbuj jeszcze raz.' : 'Ups! Etwas ist schief gelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.'}</p>
            <MdError className="text-red-500 text-4xl ml-3 bg-white rounded-full" />
          </div>
        )}
      </div>
    </>
  );
};

export default FormComponent;
