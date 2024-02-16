import { LightButton } from '@/components/Buttons/buttons';
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';

export const SectionSeven: React.FC = () => {

    const {t}=useTranslation();

    return (
        <div className={styles.container}>
          <h2>{t('home.startNow')}</h2>
          <LightButton text={t('home.startButton')}/>
        </div>
      );
}