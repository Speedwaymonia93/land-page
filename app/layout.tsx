import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: "Strona Krajowego Związku Towarzystw Polsko-Niemieckich",
  description: "Strona poświęcona aktualnościom i działalmności towarzystwa polsko-niemieckiego",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
