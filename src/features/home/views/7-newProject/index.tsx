import { LightButton } from '@/components/Buttons/buttons';
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const NewProject: React.FC = () => {

    const router = useRouter();

    const {t}=useTranslation();

    return (
        <div className={styles.container}>
          <h2>{t('home.startNow')}</h2>
          <Link href={'https://www.vinciblock.com/'} target="_blank" rel="noopener noreferrer">
            <LightButton text={t('home.startButton')}/>
          </Link>
        </div>
      );
}