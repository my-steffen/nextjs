import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface FormData {
    firstname?: string;
    lastname?: string;
    email?: string;  // Füge weitere Felder hinzu, falls nötig
    message?: string;
}

const transporter = nodemailer.createTransport({
    host: 'aixssd332.aix-cloud.de',
    port: 465,
    secure: true,
    auth: {
        user: 'no-reply@steffenluebben.de',
        pass: '!whwX3yrR6OzN1$J',
    },
    logger: true, // Aktiviert das Logging
    debug: true,  // Zeigt Debug-Informationen an
});

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const data: FormData = {};

    formData.forEach((value, key) => {
        data[key as keyof FormData] = value as string;
    });

    console.log('Empfangene Daten:', data); // Überprüfen der empfangenen Daten

    // E-Mail senden
    const mailOptions = {
        from: 'no-reply@steffenluebben.de',
        to: 'me@steffenluebben.de',
        subject: 'Neue Kontaktanfrage',
        text: `Neue Anfrage von ${data.firstname} ${data.lastname}:\n\n${data.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-Mail gesendet');
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
    }

    return NextResponse.json({ message: 'Form submitted successfully', data });
}
