'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md';
import Image from 'next/image';
import loading from '../../public/loading.png'
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

const FormComponent: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
	resolver: yupResolver(validationSchema),
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
      	<label className="text-lime-600 font-bold">Imię</label>
      	<input type="text" {...register('imie')} 
                placeholder="Imie"
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.imie && <p className="text-red-500">{errors.imie.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">Nazwisko</label>
      	<input type="text" {...register('nazwisko')} placeholder="Nazwisko"

                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.nazwisko && <p className="text-red-500">{errors.nazwisko.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">Organizacja / Instytucja</label>
      	<input type="text" {...register('organizacja')} placeholder='Organizacja / Instytucja'
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2"/>
      	{errors.organizacja && <p className="text-red-500">{errors.organizacja.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">Grupa</label>
      	<input type="text" {...register('grupa')} placeholder='Grupa'
                className="rounded p-3 w-full bg-gray-100 bg-opacity-50 text-blue-700 mt-2" />
      	{errors.grupa && <p className="text-red-500">{errors.grupa.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">Vegetarianin</label>
                  <div className='flex flex-row'>
                          <input className="mx-2 px-2" type="radio" value="TAK" {...register('vegetarianin')} /> TAK
                          <input className="mx-2 px-2" type="radio" value="NIE" {...register('vegetarianin')} /> NIE
                   
      	</div>
      	{errors.vegetarianin && <p className="text-red-500">{errors.vegetarianin.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">Oprowadzanie w piątek</label>
                  <div className='flex flex-row'>
                      <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('oprowadzanie')} /> TAK</div>
        	
        	<div><input className="mx-2 px-2" type="radio" value="NIE" {...register('oprowadzanie')} /> NIE</div>
      	</div>
      	{errors.oprowadzanie && <p className="text-red-500">{errors.oprowadzanie.message}</p>}
    	</div>

    	<div>
      	<label className="text-lime-600 font-bold">Wjazd na Szyndzielnię</label>
                  <div className='flex flex-row'>
                      <div><input className="mx-2 px-2" type="radio" value="TAK" {...register('wjazd')} /> TAK</div>
        	<div><input className="mx-2 px-2" type="radio" value="NIE" {...register('wjazd')} /> NIE</div>
      	</div>
      	{errors.wjazd && <p className="text-red-500">{errors.wjazd.message}</p>}
    	</div>

    	<div >
      	<label className="text-lime-600 font-bold">Nocleg</label>
                  <div className='flex flex-row'>
                      <div>
        	<input type="radio" className="mx-2 px-2"  value="11-12.10" {...register('nocleg')} /> 11-12.10</div>
        	<div><input className="mx-2 px-2" type="radio" value="12-13.10" {...register('nocleg')} /> 12-13.10</div>
      	</div>
      	{errors.nocleg && <p className="text-red-500">{errors.nocleg.message}</p>}
    	</div>

    	<button type="submit" className="w-full m-3 border rounded-lg border-lime-600 py-3 px-6 bg-lime-700 text-white font-bold hover:bg-lime-900 hover:text-gray-200"
              >Submit</button>
          </form>
    
      </div>
      <div className="text-center pb-4 flex justify-center mb-5">
              { submissionStatus === 'sent' && (
        
                <div className='flex flex-col items-center'>
                  <AiFillCheckCircle className='ml-3 text-lime-500 text-4xl bg-white rounded-full'  />   
               <p className="text-emerald-600 font-bold text-xl my-2 ">
                  Dziękujemy za kontakt. Twoja wiadomość została wysłana.
                </p>
                               
                  
                  <p className="text-teal-600 font-semibold text-lg">Twoje zgłoszenie zostało przyjęte</p>
                 </div> 
              ) }
              {
                submissionStatus === 'waiting' &&(
                  <div className='flex flex-col items-center'>
                    <Image width={ 50 } src={loading} height={50} alt="Wysyłanie wiadomości"/>   
                    <p className="text-indigo-600 font-bold text-xl my-2">Wysyłanie trwa</p>
                    <p className="text-indigo-600 font-semibold text-lg">Prosimy o cierpliwość</p>
                 </div> 
                 
                )
              }
              { submissionStatus === 'error' && (
                <div className='flex flex-row items-center'>
                <p className="font-bold text-xl my-2">Oops! Coś poszło nie tak, odświez strone i spróbuj jeszcze raz</p>
                  <MdError className="text-red-500 text-4xl ml-3 bg-white rounded-full" />
                  </div>
              )}
            </div>
            </> 
  );
};

export default FormComponent;



