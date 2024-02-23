import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import Link from 'next/link';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.logoSection}>
                    <Link href='/'>VINCIBLOCK</Link>
                    <p>{t("footer.address")}</p>
                    <p>info@vinciblock.com</p>
                    <p>+1 234 456 678 89</p>
                </div>
                {/* big screen */}
                <div className={styles.linksSection}>
                    <div className={styles.list}>
                        <h5>Links</h5>
                        <Link href='/'>{t("footer.home")}</Link>
                        <Link href='/about'>{t("footer.about")}</Link>
                        <Link href='/bookings'>{t("footer.bookings")}</Link>
                        <Link href='/blog'>{t("footer.blog")}</Link>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.legal")}</h5>
                        <Link href='/terms'>{t("footer.terms")}</Link>
                        <Link href='/privacy'>{t("footer.privacy")}</Link>
                        <Link href='/cookies'>{t("footer.cookies")}</Link>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.products")}</h5>
                        <Link href='/'>{t("footer.taketour")}</Link>
                        <Link href='/'>{t("footer.livechat")}</Link>
                        <Link href='/'>{t("footer.reviews")}</Link>
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
                        <Link href='/'>{t("footer.home")}</Link>
                        <Link href='/about'>{t("footer.about")}</Link>
                        <Link href='/bookings'>{t("footer.bookings")}</Link>
                        <Link href='/blog'>{t("footer.blog")}</Link>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.legal")}</h5>
                        <Link href='/terms'>{t("footer.terms")}</Link>
                        <Link href='/privacy'>{t("footer.privacy")}</Link>
                        <Link href='/cookies'>{t("footer.cookies")}</Link>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.products")}</h5>
                        <Link href='/'>{t("footer.taketour")}</Link>
                        <Link href='/'>{t("footer.livechat")}</Link>
                        <Link href='/'>{t("footer.reviews")}</Link>
                    </div>
                    <div className={styles.list}>
                        <h5>{t("footer.newsletter")}</h5>
                        <Link href='/'>{t("footer.newsletterdesc")}</Link>
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