import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.logoSection}>
                    <a href='/'>VINCIBLOCK</a>
                    <p>{t("footer.address")}</p>
                    <p>info@vinciblock.com</p>
                    <p>+1 234 456 678 89</p>
                </div>
                {/* big screen */}
                <div className={styles.linksSection}>
                    <div className={styles.list}>
                        <h5>Links</h5>
                        <a href='/'>{t("footer.home")}</a>
                        <a href='/about'>{t("footer.about")}</a>
                        <a href='/bookings'>{t("footer.bookings")}</a>
                        <a href='/blog'>{t("footer.blog")}</a>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.legal")}</h5>
                        <a href='/terms'>{t("footer.terms")}</a>
                        <a href='/privacy'>{t("footer.privacy")}</a>
                        <a href='/cookies'>{t("footer.cookies")}</a>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.products")}</h5>
                        <a href='/'>{t("footer.taketour")}</a>
                        <a href='/'>{t("footer.livechat")}</a>
                        <a href='/'>{t("footer.reviews")}</a>
                    </div>
                </div>
                <div className={styles.newsletterSection}>
                    <h5>{t("footer.newsletter")}</h5>
                    <p>{t("footer.newsletterdesc")}</p>
                    <div className={styles.mail}>
                        <input type="text" placeholder={t("footer.yourEmail")} />
                        <button>{t("footer.subscribe")}</button>
                    </div>
                </div>
                {/* small screen  */}
                <div className={styles.linksSection2}>
                    <div className={styles.list}>
                        <h5>Links</h5>
                        <a href='/'>{t("footer.home")}</a>
                        <a href='/about'>{t("footer.about")}</a>
                        <a href='/bookings'>{t("footer.bookings")}</a>
                        <a href='/blog'>{t("footer.blog")}</a>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.legal")}</h5>
                        <a href='/terms'>{t("footer.terms")}</a>
                        <a href='/privacy'>{t("footer.privacy")}</a>
                        <a href='/cookies'>{t("footer.cookies")}</a>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.products")}</h5>
                        <a href='/'>{t("footer.taketour")}</a>
                        <a href='/'>{t("footer.livechat")}</a>
                        <a href='/'>{t("footer.reviews")}</a>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.newsletter")}</h5>
                        <a href='/'>{t("footer.newsletterdesc")}</a>
                    </div>
                </div>
                <div className={styles.newsletterSection2}>
                    <div className={styles.mail}>
                        <input type="text" placeholder={t("footer.yourEmail")} />
                        <button>{t("footer.subscribe")}</button>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>{t("footer.copyrigth")}</div>
        </div>
    )
};
export default Footer;