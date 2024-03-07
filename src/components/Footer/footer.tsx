import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRef, FormEvent } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import instagram from '../../../public/assents/images/instagram.png';
import facebook from '../../../public/assents/images/facebook.png';
import linkedin from '../../../public/assents/images/linkedin.png';
import medium from '../../../public/assents/images/medium.png';
import github from '../../../public/assents/images/github.png';
import x from '../../../public/assents/images/x.png';
import logo from '../../../public/assents/images/light-logo-VinciBlock.png';
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();

  const socialnetworks=[
    {
      link:"https://www.instagram.com/",
      img:instagram
    },
    {
      link:"https://www.facebook.com/",
      img:facebook
    },
    {
      link:"https://www.linkedin.com/",
      img:linkedin
    },
    {
      link:"https://medium.com/",
      img:medium
    },
    {
      link:"https://github.com/",
      img:github
    },
    {
      link:"https://twitter.com/",
      img:x
    }
  ]

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);
    if (form.current) {
      emailjs
        .sendForm(
          "service_9j9r7wy",
          "template_vsebyz4",
          form.current,
          "5LHQ4ckM4eev_Hb-R"
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
          <Link href="/">
            <Image src={logo} alt="VinciBlockLogo"/>
          </Link>
          <p>{t("footer.address")}</p>
          <p>info@vinciblock.com</p>
          <p>+1 234 456 678 89</p>
        </div>
        {/* big screen */}
        <div className={styles.linksSection}>
          <div className={styles.list}>
            <h5>Links</h5>
            <Link
              href="https://www.vinciblock.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.home")}
            </Link>
            <Link
              href="https://www.vinciblock.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.about")}
            </Link>
            {/* <Link
              href="https://www.vinciblock.com/bookings"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.bookings")}
            </Link>
            <Link
              href="https://www.vinciblock.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.blog")}
            </Link> */}
          </div>
          <div className={styles.list}>
            <h5>{t("footer.legal")}</h5>
            <Link
              href="https://www.vinciblock.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="https://www.vinciblock.com/compensation-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.compensation")}
            </Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.services")}</h5>
            <Link
              href="https://www.vinciblock.com/blockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.blockchain")}
            </Link>
            <Link
              href="https://www.vinciblock.com/products"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.products")}
            </Link>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <h5>{t("footer.newsletter")}</h5>
          <p>{t("footer.newsletterdesc")}</p>
          <form
            id="email"
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
          <div className={styles.socialNetworks}>
            {socialnetworks.map((s,i)=>(
              <Link href={s.link} key={`sn-${i}`} className={styles.network} target="_blank" rel="noopener noreferrer">
                <Image src={s.img} alt="networkImage"/>
              </Link>
            ))}
          </div>
        </div>
        {/* small screen  */}
        <div className={styles.linksSection2}>
          <div className={styles.list}>
            <h5>Links</h5>
            <Link
              href="https://www.vinciblock.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.home")}
            </Link>
            <Link
              href="https://www.vinciblock.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.about")}
            </Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.legal")}</h5>
            <Link
              href="https://www.vinciblock.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="https://www.vinciblock.com/compensation-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.compensation")}
            </Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.services")}</h5>
            <Link
              href="https://www.vinciblock.com/blockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.blockchain")}
            </Link>
            <Link
              href="https://www.vinciblock.com/products"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.products")}
            </Link>
          </div>
          <div className={styles.list}>
            <h5>{t("footer.newsletter")}</h5>
            <p>{t("footer.newsletterdesc")}</p>
          </div>
        </div>
        <div className={styles.newsletterSection2}>
          <form
            id="email"
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
          <div className={styles.socialNetworks}>
            {socialnetworks.map((s,i)=>(
              <Link href={s.link} key={`sn-${i}`} className={styles.network} target="_blank" rel="noopener noreferrer">
                <Image src={s.img} alt="networkImage"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>{t("footer.copyrigth")}</div>
    </div>
  );
};
export default Footer;
