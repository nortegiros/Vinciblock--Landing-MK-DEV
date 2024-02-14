import { LightButton } from '@/components/Buttons/buttons';
import styles from './styles.module.css'

export const SectionSeven: React.FC = () => {
    return (
        <div className={styles.container}>
          <h2>¡Inicia tu proyecto ahora!</h2>
          <LightButton text='Iniciar Ahora'/>
        </div>
      );
}