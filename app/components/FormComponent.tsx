'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md';
import Image from 'next/image';
import loading from '../../public/loading.png'
import { useLanguage } from '../context/LanguageContext'

interface FormValues {
  imie: string;
  nazwisko: string;
  organizacja: string;
  grupa: string;
  vegetarianin: string;
  oprowadzanie: string;
  wjazd: string;
  nocleg: string;
}

const validationSchema = Yup.object().shape({
  imie: Yup.string().required('Imię jest wymagane'),
  nazwisko: Yup.string().required('Nazwisko jest wymagane'),
  organizacja: Yup.string().required('Organizacja / Instytucja jest wymagana'),
  grupa: Yup.string().required('Grupa jest wymagana'),
  vegetarianin: Yup.string().required('Wybór jest wymagany'),
  oprowadzanie: Yup.string().required('Wybór jest wymagany'),
  wjazd: Yup.string().required('Wybór jest wymagany'),
  nocleg: Yup.string().required('Wybór jest wymagany'),
});

const validationSchemaDE = Yup.object().shape({
  imie: Yup.string().required('Vorname ist erforderlich'),
  nazwisko: Yup.string().required('Name ist erforderlich'),
  organizacja: Yup.string().required('Die Organisation/Institution ist verpflichtet'),
  grupa: Yup.string().required('Die Gruppe ist verpflichtet'),
  vegetarianin: Yup.string().required('Wahlfreiheit ist erforderlich'),
  oprowadzanie: Yup.string().required('Wahlfreiheit ist erforderlich'),
  wjazd: Yup.string().required('Wahlfreiheit ist erforderlich'),
  nocleg: Yup.string().required('Wahlfreiheit ist erforderlich'),
});
const FormComponent: React.FC = () => {
  const { language } = useLanguage();
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: language === 'pl' ? yupResolver(validationSchema) : yupResolver(validationSchemaDE)
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
  	<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-10">
    	<div>
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Imię' : 'Vorname'}</label>
      	<input type="text" {...register('imie')} 
                placeholder={language === 'pl' ? 'Imię' : 'Vorname'}
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.imie && <p className="text-red-500">{errors.imie.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Nazwisko' : 'Name'}</label>
      	<input type="text" {...register('nazwisko')} placeholder={language === 'pl' ? 'Nazwisko' : 'Name'}

                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.nazwisko && <p className="text-red-500">{errors.nazwisko.message}</p>}
    	</div>

          
    	<div>
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Organizacja / Instytucja' : 'Organisation/Einrichtung'}</label>
      	<input type="text" {...register('organizacja')} placeholder={language === 'pl' ? 'Organizacja / Instytucja' : 'Organisation/Einrichtung'}
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.organizacja && <p className="text-red-500">{errors.organizacja.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Grupa' : 'Gruppe'}</label>
      	<input type="text" {...register('grupa')} placeholder={language === 'pl' ? 'Grupa' : 'Gruppe'}
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
      	{errors.grupa && <p className="text-red-500">{errors.grupa.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Wegetarianin' : 'Vegetarisch'}</label>
                  <div className='flex flex-row'>
                          <input className="mx-2 px-2" type="radio" value="TAK" {...register('vegetarianin')} /> {language === 'pl' ? 'TAK' : 'JA'}
                          <input className="mx-2 px-2" type="radio" value="NIE" {...register('vegetarianin')} />{language === 'pl' ? 'Nie' : 'NEIN'}
                   
      	</div>
      	{errors.vegetarianin && <p className="text-red-500">{errors.vegetarianin.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Oprowadzanie w piątek' : 'Geführte Touren am Freitag'}</label>
                  <div className='flex flex-row'>
                      <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('oprowadzanie')} /> {language === 'pl' ? 'TAK' : 'JA'}</div>
        	
        	<div><input className="mx-2 px-2" type="radio" value="NIE" {...register('oprowadzanie')} /> {language === 'pl' ? 'Nie' : 'NEIN'}</div>
      	</div>
      	{errors.oprowadzanie && <p className="text-red-500">{errors.oprowadzanie.message}</p>}
    	</div>

    	<div>
              <label className="text-lime-600 font-bold">{language === 'pl' ? 'Wjazd na Szyndzielnię' : 'Eintritt in Szyndzielnia'}</label>
                  <div className='flex flex-row'>
                      <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('wjazd')} /> {language === 'pl' ? 'TAK' : 'JA'}</div>
        	<div><input className="mx-2 px-2" type="radio" value="NIE" {...register('wjazd')} /> {language === 'pl' ? 'Nie' : 'NEIN'}</div>
      	</div>
      	{errors.wjazd && <p className="text-red-500">{errors.wjazd.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">{language === 'pl' ? 'Nocleg' : 'Unterkunft'}</label>
                  <div className='flex flex-row'>
                      <div>
        	<input type="radio" className="mx-2 px-2"  value="11-12.10" {...register('nocleg')} /> 11-12.10</div>
        	<div><input className="mx-2 px-2" type="radio" value="12-13.10" {...register('nocleg')} /> 12-13.10</div>
      	</div>
      	{errors.nocleg && <p className="text-red-500">{errors.nocleg.message}</p>}
    	</div>

    	<button type="submit" className="w-full m-3 border rounded-lg border-lime-600 py-3 px-6 bg-lime-700 text-white font-bold hover:bg-lime-900 hover:text-gray-200"
              >{language === 'pl' ? 'Wyślij zgłoszenie' : 'Bewerbung einreichen'}</button>
          </form>
    
      </div>
      <div className="text-center pb-4 flex justify-center mb-5">
              { submissionStatus === 'sent' && (
        
                <div className='flex flex-col items-center'>
                  <AiFillCheckCircle className='ml-3 text-lime-500 text-4xl bg-white rounded-full'  />   
              <p className="text-emerald-600 font-bold text-xl my-2 ">
                {language === 'pl' ? 'Dziękujemy za kontakt. Twoja wiadomość została wysłana.': 'Vielen Dank, dass Sie uns kontaktiert haben. Ihre Nachricht wurde gesendet.'}
                </p>
              <p className="text-teal-600 font-semibold text-lg">
                {language === 'pl' ? 'Twoje zgłoszenie zostało przyjęte' : 'Ihre Bewerbung wurde angenommen'}
                </p>
                 </div> 
              ) }
              {
                submissionStatus === 'waiting' &&(
                  <div className='flex flex-col items-center'>
                    <Image width={ 50 } src={loading} height={50} alt="Wysyłanie wiadomości"/>   
                <p className="text-indigo-600 font-bold text-xl my-2">
                  {language === 'pl' ? 'Wysyłanie trwa' : 'Senden geht weiter'}
          </p>
                <p className="text-indigo-600 font-semibold text-lg">
                     {language === 'pl' ? ' Prosimy o cierpliwość' : 'Bitte haben Sie Geduld'}
                 </p>
                 </div> 
                 
                )
              }
              { submissionStatus === 'error' && (
                <div className='flex flex-row items-center'>
              <p className="font-bold text-xl my-2">
                {language === 'pl' ? 'Oops! Coś poszło nie tak, odświez strone i spróbuj jeszcze raz' :'Huch! Etwas ist schief gelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.' }
                </p>
                  <MdError className="text-red-500 text-4xl ml-3 bg-white rounded-full" />
                  </div>
              )}
            </div>
            </> 
  );
};

export default FormComponent;



