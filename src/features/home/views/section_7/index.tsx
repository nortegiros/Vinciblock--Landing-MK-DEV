import { LightButton } from '@/components/Buttons/buttons';
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const SectionSeven: React.FC = () => {

    const router = useRouter();

    const {t}=useTranslation();

    return (
        <div className={styles.container}>
          <h2>{t('home.startNow')}</h2>
          <LightButton text={t('home.startButton')} onClick={()=>router.push('https://www.vinciblock.com/')}/>
        </div>
      );
}