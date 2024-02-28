import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRef, FormEvent } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);
    if (form.current) {
      emailjs
        .sendForm(
          "service_a8whzxg",
          "template_797i3bu",
          form.current,
          "B24x0IgrandYKdN-P"
        )
        .then(
          (result) => {
            console.log(result);
            toast.success(t("footer.successSubscribe"));
            form.current?.reset();
          },
          (error) => {
            console.error(error);
            toast.error(t("footer.errorSubscribe"));
          }
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logoSection}>
          <Link href="/">VINCIBLOCK</Link>
          <p>{t("footer.address")}</p>
          <p>info@vinciblock.com</p>
          <p>+1 234 456 678 89</p>
        </div>
        {/* big screen */}
        <div className={styles.linksSection}>
          <div className={styles.list}>
            <h5>Links</h5>
            <Link href="/">{t("footer.home")}</Link>
            <Link href="/about">{t("footer.about")}</Link>
            <Link href="/bookings">{t("footer.bookings")}</Link>
            <Link href="/blog">{t("footer.blog")}</Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.legal")}</h5>
            <Link href="/terms-of-use">{t("footer.terms")}</Link>
            <Link href="/privacy-policy">{t("footer.privacy")}</Link>
            <Link href="/cookies-policy">{t("footer.cookies")}</Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.products")}</h5>
            <Link href="/take-tours">{t("footer.taketour")}</Link>
            <Link href="/live-chat">{t("footer.livechat")}</Link>
            <Link href="/reviews">{t("footer.reviews")}</Link>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <h5>{t("footer.newsletter")}</h5>
          <p>{t("footer.newsletterdesc")}</p>
          <form
            id="emailForm"
            className={styles.mail}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder={t("footer.yourEmail")}
              name="email"
              required
            />
            <button type="submit">{t("footer.subscribe")}</button>
          </form>
        </div>
        {/* small screen  */}
        <div className={styles.linksSection2}>
          <div className={styles.list}>
            <h5>Links</h5>
            <Link href="/">{t("footer.home")}</Link>
            <Link href="/about">{t("footer.about")}</Link>
            <Link href="/bookings">{t("footer.bookings")}</Link>
            <Link href="/blog">{t("footer.blog")}</Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.legal")}</h5>
            <Link href="/terms-of-use">{t("footer.terms")}</Link>
            <Link href="/privacy-policy">{t("footer.privacy")}</Link>
            <Link href="/cookies-policy">{t("footer.cookies")}</Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.products")}</h5>
            <Link href="/take-tours">{t("footer.taketour")}</Link>
            <Link href="/live-chat">{t("footer.livechat")}</Link>
            <Link href="/reviews">{t("footer.reviews")}</Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.newsletter")}</h5>
            <Link href="/">{t("footer.newsletterdesc")}</Link>
          </div>
        </div>
        <div className={styles.newsletterSection2}>
          <form
            id="emailForm"
            className={styles.mail}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder={t("footer.yourEmail")}
              name="email"
              required
            />
            <button type="submit">{t("footer.subscribe")}</button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>{t("footer.copyrigth")}</div>
    </div>
  );
};
export default Footer;