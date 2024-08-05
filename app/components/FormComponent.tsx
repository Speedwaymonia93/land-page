'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
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
  organizacja: string;
  grupa: string;
  vegetarianin: string;
  oprowadzanie: string;
  wjazd: string;
  bal: string;
  uwagi?: string;
  nocleg: string;
  student: string;
}

const validationSchemaPL = Yup.object<FormValues>().shape({
  imie: Yup.string().required('Imię jest wymagane'),
  nazwisko: Yup.string().required('Nazwisko jest wymagane'),
  organizacja: Yup.string().required('Organizacja / Instytucja jest wymagana'),
  student: Yup.string().required('Wybór jest wymagany'),
  grupa: Yup.string().required('Grupa jest wymagana'),
  vegetarianin: Yup.string().required('Wybór jest wymagany'),
  oprowadzanie: Yup.string().required('Wybór jest wymagany'),
  wjazd: Yup.string().required('Wybór jest wymagany'),
  bal: Yup.string().required('Wybór jest wymagany'),
  uwagi: Yup.string().optional(),
   nocleg: Yup.string().required('Wybór noclegu jest wymagany'),
});

const validationSchemaDE = Yup.object<FormValues>().shape({
  imie: Yup.string().required('Vorname ist erforderlich'),
  nazwisko: Yup.string().required('Name ist erforderlich'),
  organizacja: Yup.string().required('Die Organisation/Institution ist verpflichtet'),
  student: Yup.string().required('Wahlfreiheit ist erforderlich'),
  grupa: Yup.string().required('Die Gruppe ist verpflichtet'),
  vegetarianin: Yup.string().required('Wahlfreiheit ist erforderlich'),
  oprowadzanie: Yup.string().required('Wahlfreiheit ist erforderlich'),
  wjazd: Yup.string().required('Wahlfreiheit ist erforderlich'),
  bal: Yup.string().required('Wahlfreiheit ist erforderlich'),
  uwagi: Yup.string().optional(),
  nocleg: Yup.string().required('Unterkunftsoption ist erforderlich')
});

const FormComponent: React.FC = () => {
  const { language } = useLanguage();
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: language === 'pl' ? yupResolver(validationSchemaPL) : yupResolver(validationSchemaDE)
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
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Imię' : 'Vorname'}</label>
            <input type="text" {...register('imie')}
              placeholder={language === 'pl' ? 'Imię' : 'Vorname'}
              className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.imie && <p className="text-red-500">{errors.imie.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Nazwisko' : 'Name'}</label>
            <input type="text" {...register('nazwisko')} placeholder={language === 'pl' ? 'Nazwisko' : 'Name'}
              className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.nazwisko && <p className="text-red-500">{errors.nazwisko.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Organizacja / Instytucja' : 'Organisation/Einrichtung'}</label>
            <input type="text" {...register('organizacja')} placeholder={language === 'pl' ? 'Organizacja / Instytucja' : 'Organisation/Einrichtung'}
              className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
            {errors.organizacja && <p className="text-red-500">{errors.organizacja.message}</p>}
          </div>
           <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Student / doktorant / uczeń' : 'Student / Doktorand / Schüler '}</label>
            <div className='flex flex-row'>
              <input className="mx-2 px-2" type="radio" value="TAK" {...register('student')} /> {language === 'pl' ? 'TAK' : 'JA'}
              <input className="mx-2 px-2" type="radio" value="NIE" {...register('student')} />{language === 'pl' ? 'NIE' : 'NEIN'}
            </div>
            {errors.student && <p className="text-red-500">{errors.student.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Grupa robocza 12.10.' : 'Arbeitsgruppe am 12.10.'}</label>
            <select {...register('grupa')} className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2">
              <option value="">{language === 'pl' ? 'Wybierz grupę' : 'Gruppe auswählen'}</option>
              <option value="Grupa robocza nr IV: Polska i Niemcy wobec WYZWAŃ KLIMATYCZNYCH">{language === 'pl' ? 'Grupa robocza nr IV: Polska i Niemcy wobec WYZWAŃ KLIMATYCZNYCH' : 'Gruppe IV: Polen und Deutschland vor den KLIMA-HERAUSFORDERUNGEN'}</option>
              <option value="Grupa robocza nr V: MŁODZIEŻ o przyszłości stosunków polsko-niemieckich">{language === 'pl' ? 'Grupa robocza nr V: MŁODZIEŻ o przyszłości stosunków polsko-niemieckich' : 'Gruppe V: JUGEND über die Zukunft der deutsch-polnischen Beziehungen'}</option>
              <option value="Grupa robocza nr VI: Wokół DOMU POLSKO-NIEMIECKIEGO w Berlinie">{language === 'pl' ? 'Grupa robocza nr VI: Wokół DOMU POLSKO-NIEMIECKIEGO w Berlinie' : 'Gruppe VI: Rund um das POLNISCH-DEUTSCHE HAUS in Berlin'}</option>
              <option value="Grupa robocza nr VII: POLACY w Niemczech – NIEMCY w Polsce">{language === 'pl' ? 'Grupa robocza nr VII: POLACY w Niemczech – NIEMCY w Polsce' : 'Gruppe VII: POLEN in Deutschland – DEUTSCHE in Polen'}</option>
            </select>
            {errors.grupa && <p className="text-red-500">{errors.grupa.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Wegetarianin' : 'Vegetarisch'}</label>
            <div className='flex flex-row'>
              <input className="mx-2 px-2" type="radio" value="TAK" {...register('vegetarianin')} /> {language === 'pl' ? 'TAK' : 'JA'}
              <input className="mx-2 px-2" type="radio" value="NIE" {...register('vegetarianin')} />{language === 'pl' ? 'NIE' : 'NEIN'}
            </div>
            {errors.vegetarianin && <p className="text-red-500">{errors.vegetarianin.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Oprowadzanie po mieście 11.10.' : 'Stadtbesichtigung am 11.10.'}</label>
            <div className='flex flex-row'>
              <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('oprowadzanie')} /> {language === 'pl' ? 'TAK' : 'JA'}</div>
              <div><input className="mx-2 px-2" type="radio" value="NIE" {...register('oprowadzanie')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</div>
            </div>
            {errors.oprowadzanie && <p className="text-red-500">{errors.oprowadzanie.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Udział w Balu Polsko-Niemieckim' : 'Deutsch-Polnischer Ball'}</label>
            <div className='flex flex-row'>
              <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('bal')} /> {language === 'pl' ? 'TAK' : 'JA'}</div>
              <div><input className="mx-2 px-2" type="radio" value="NIE" {...register('bal')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</div>
            </div>
            {errors.bal && <p className="text-red-500">{errors.bal.message}</p>}
          </div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Wjazd na Szyndzielnię 13.10.' : 'Seilbahnfahrt auf Szyndzielnia am 13.10.'}</label>
            <div className='flex flex-row'>
              <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('wjazd')} /> {language === 'pl' ? 'TAK' : 'JA'}</div>
              <div><input className="mx-2 px-2" type="radio" value="NIE" {...register('wjazd')} /> {language === 'pl' ? 'NIE' : 'NEIN'}</div>
            </div>
            {errors.wjazd && <p className="text-red-500">{errors.wjazd.message}</p>}
          </div>
           <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Nocleg' : 'Unterkunft'}</label>
            <div className='flex flex-row'>
              <div><input className="mx-2 px-2" type="radio" value="11-12.10" {...register('nocleg')} /> {language === 'pl' ? '11-12.10.' : '11-12.10.'}</div>
              <div><input className="mx-2 px-2" type="radio" value="12-13.10" {...register('nocleg')} /> {language === 'pl' ? '12-13.10.' : '12-13.10.'}</div>
              <div><input className="mx-2 px-2" type="radio" value="oba" {...register('nocleg')} /> {language === 'pl' ? 'Oba' : 'Beide'}</div>
            </div>
            {errors.nocleg && <p className="text-red-500">{errors.nocleg.message}</p>}
          </div>
          <div></div>
          <div>
            <label className="text-lime-600 font-bold">{language === 'pl' ? 'Uwagi (w przypadku, gdy pokój dwuosobowy ma być współdzielony z inną uczestniczką, lub innym uczestnikiem kongresu, prosimy w tym miejscu podać nazwisko!)' : 'Anmerkungen (falls ein Doppelzimmer mit einem anderen Kongressteilnehmer / einer anderen Kongressteilnehmerin gewünscht wird, bitte hier den Namen angeben!)'}</label>
            <textarea {...register('uwagi')} placeholder={language === 'pl' ? 'Uwagi' : 'Anmerkungen'}
              className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2 h-32 resize-none" maxLength={500} />
            {errors.uwagi && <p className="text-red-500">{errors.uwagi.message}</p>}
          </div>
          <button type="submit" className="w-full m-3 border rounded-lg border-lime-600 py-3 px-6 bg-lime-700 text-white font-bold hover:bg-lime-900 hover:text-gray-200">
            {language === 'pl' ? 'Wyślij zgłoszenie' : 'Bewerbung einreichen'}
          </button>
        </form>
      </div>
      <div className="text-center pb-4 flex justify-center mb-5">
        {submissionStatus === 'sent' && (
          <div className='flex flex-col items-center'>
            <AiFillCheckCircle className='ml-3 text-lime-500 text-4xl bg-white rounded-full' />
            <p className="text-emerald-600 font-bold text-xl my-2">
              {language === 'pl' ? 'Dziękujemy za kontakt. Twoja wiadomość została wysłana.' : 'Vielen Dank, dass Sie uns kontaktiert haben. Ihre Nachricht wurde gesendet.'}
            </p>
            <p className="text-teal-600 font-semibold text-lg">
              {language === 'pl' ? 'Twoje zgłoszenie zostało przyjęte' : 'Ihre Bewerbung wurde angenommen'}
            </p>
          </div>
        )}
        {submissionStatus === 'waiting' && (
          <div className='flex flex-col items-center'>
            <Image width={50} src={loading} height={50} alt="Wysyłanie wiadomości" />
            <p className="text-indigo-600 font-bold text-xl my-2">
              {language === 'pl' ? 'Wysyłanie trwa' : 'Senden geht weiter'}
            </p>
            <p className="text-indigo-600 font-semibold text-lg">
              {language === 'pl' ? ' Prosimy o cierpliwość' : 'Bitte haben Sie Geduld'}
            </p>
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className='flex flex-row items-center'>
            <p className="font-bold text-xl my-2">
              {language === 'pl' ? 'Oops! Coś poszło nie tak, odświez strone i spróbuj jeszcze raz' : 'Huch! Etwas ist schief gelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.'}
            </p>
            <MdError className="text-red-500 text-4xl ml-3 bg-white rounded-full" />
          </div>
        )}
      </div>
    </>
  );
};

export default FormComponent;
