import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-hero leading-none">RAPHAËLO</h1>
        <p className="text-text-secondary uppercase tracking-[0.5em] mt-4">{t('subtitle')}</p>
      </div>
    </main>
  );
}
