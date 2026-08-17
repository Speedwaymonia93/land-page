// // app/api/sendEmail/route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function POST(req: NextRequest) {
//   try {
// 	const { imie, nazwisko, organizacja, grupa, vegetarianin, oprowadzanie, wjazd, nocleg } = await req.json();

// 	const to = process.env.EMAIL_TO;
// 	const from = process.env.EMAIL_USER;

// 	if (!to || !from) {
//   	return NextResponse.json({ message: 'Email configuration is missing' }, { status: 500 });
// 	}

// 	const msg = {
//   	to,
//   	from,
//   	subject: 'Form Submission',
//   	html: `
//     	<h1>Form Submission Details</h1>
//     	<p><strong>Imię:</strong> ${imie}</p>
//     	<p><strong>Nazwisko:</strong> ${nazwisko}</p>
//     	<p><strong>Organizacja / Instytucja:</strong> ${organizacja}</p>
//     	<p><strong>Grupa:</strong> ${grupa}</p>
//     	<p><strong>Vegetarianin:</strong> ${vegetarianin}</p>
//     	<p><strong>Oprowadzanie w piątek:</strong> ${oprowadzanie}</p>
//     	<p><strong>Wjazd na Szyndzielnię:</strong> ${wjazd}</p>
//     	<p><strong>Nocleg:</strong> ${nocleg}</p>
//     	<style>
//       	h1 {
//         	color: #333;
//       	}
//       	p {
//         	font-size: 16px;
//       	}
//       	strong {
//         	color: #555;
//       	}
//     	</style>
//   	`,
// 	};

// 	await sendgrid.send(msg);
// 	console.log('Email sent:', msg);  // Add this log
// 	return NextResponse.json({ message: 'Email sent successfully!' });
//   } catch (error) {
// 	console.error('Error sending email:', error);
// 	return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
//   }
// }

// app/api/sendEmail/route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
// 	const { imie, nazwisko, organizacja, grupa, vegetarianin, oprowadzanie, wjazd, nocleg } = await req.json();

// 	const to = process.env.EMAIL_TO;
// 	const from = process.env.EMAIL_USER;

// 	if (!to || !from) {
//   	return NextResponse.json({ message: 'Email configuration is missing' }, { status: 500 });
// 	}

// 	const transporter = nodemailer.createTransport({
// 		service: 'Gmail',
// 		host: 'smtp.gmail.com',
//   	auth: {
//     	user: process.env.EMAIL_USER,
//     	pass: process.env.EMAIL_PASS,
//   	},
// 	});

// 	const mailOptions = {
//   	from,
//   	to,
//   	subject: 'Form Submission',
//   	html: `
//     	<h1>Form Submission Details</h1>
//     	<p><strong>Imię:</strong> ${imie}</p>
//     	<p><strong>Nazwisko:</strong> ${nazwisko}</p>
//     	<p><strong>Organizacja / Instytucja:</strong> ${organizacja}</p>
//     	<p><strong>Grupa:</strong> ${grupa}</p>
//     	<p><strong>Vegetarianin:</strong> ${vegetarianin}</p>
//     	<p><strong>Oprowadzanie w piątek:</strong> ${oprowadzanie}</p>
//     	<p><strong>Wjazd na Szyndzielnię:</strong> ${wjazd}</p>
//     	<p><strong>Nocleg:</strong> ${nocleg}</p>
//     	<style>
//       	h1 {
//         	color: #333;
//       	}
//       	p {
//         	font-size: 16px;
//       	}
//       	strong {
//         	color: #555;
//       	}
//     	</style>
//   	`,
// 	};

// 	await transporter.sendMail(mailOptions);
// 	console.log('Email sent:', mailOptions);
// 	return NextResponse.json({ message: 'Email sent successfully!' });
//   } catch (error) {
// 	console.error('Error sending email:', error);
// 	return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
//   }
// }







// app/api/sendEmail/route.ts

import { NextRequest, NextResponse } from 'next/server';
import mailjet from 'node-mailjet';

const mailjetApiKey = process.env.MAILJET_API_KEY;
const mailjetApiSecret = process.env.MAILJET_API_SECRET;
const mj = mailjetApiKey && mailjetApiSecret ? mailjet.apiConnect(mailjetApiKey, mailjetApiSecret) : null;

export async function POST(req: NextRequest) {
  try {
	const {
		imie,
		nazwisko,
		student,
		organizacja,
		vegetarianin,
		oprowadzanie,
		panelSobotaRano,
		panelSobotaPopoludniu,
		zwiedzanieEcsNiedziela,
		bal,
		uwagi,
	} = await req.json();

	const to = process.env.EMAIL_TO;
	const from = process.env.EMAIL_USER;

	if (!to || !from) {
  	console.error('Email configuration is missing');
  	return NextResponse.json({ message: 'Email configuration is missing' }, { status: 500 });
	}

	if (!mj) {
	  console.error('Mailjet API credentials are missing');
	  return NextResponse.json({ message: 'Mailjet API credentials are missing' }, { status: 500 });
	}

	const request = mj.post('send', { version: 'v3.1' }).request({
  	Messages: [
    	{
      		From: {
        		Email: from,
					Name: `${imie} ${nazwisko}`,
      		},
      		To: [
        		{
          		Email: to,
          		Name: 'Adam Jarosz',
        		},
      		],
      		Subject: 'Formularz zgłoszenia na kongres',
      		HTMLPart: `
        		<h1>Formularz zgłoszenia na kongres</h1>
        		<p><strong>Imię:</strong> ${imie}</p>
        		<p><strong>Nazwisko:</strong> ${nazwisko}</p>
        		<p><strong>Student:</strong> ${student}</p>
        		<p><strong>Organizacja / Instytucja:</strong> ${organizacja}</p>
        		<p><strong>Vegetarianin:</strong> ${vegetarianin}</p>
        		<p><strong>Oprowadzanie w piątek:</strong> ${oprowadzanie}</p>
        		<p><strong>Panel sobota rano:</strong> ${panelSobotaRano}</p>
        		<p><strong>Panel sobota popołudniu:</strong> ${panelSobotaPopoludniu}</p>
        		<p><strong>Zwiedzanie ECS niedziela:</strong> ${zwiedzanieEcsNiedziela}</p>
        		<p><strong>Bal/Ball:</strong> ${bal}</p>
        		<p><strong>Uwagi:</strong> ${uwagi}</p>
        		<style>
          		h1 {
            		color: #333;
          		}
          		p {
            		font-size: 16px;
          		}
          		strong {
            		color: #555;
          		}
        		</style>
      		`,
    	},
  	],
	});

	await request;
	return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
	console.error('Error sending email:', error);
	return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
