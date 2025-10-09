import React from "react";
import styles from "../Footer/Footer.module.css";
const platformIconSrc = (platform) => {
  switch ((platform || "").toLowerCase()) {
    case "linkedin":
      return "Svg/linkedin.svg";
    case "instagram":
      return "Svg/instagram.svg";
    case "facebook":
      return "Svg/facebook.svg";
    case "youtube":
      return "Svg/youtube.svg";
    case "twitter":
      return "Svg/twitter.svg";
    default:
      return "Svg/link.svg";
  }
};
const Footer = ({ footer }) => {
  if (footer && footer.enabled === false) return null;

  const year = new Date().getFullYear();
  const logoSrc = footer?.logo?.src || "Svg/rexpt-logo.svg";
  const logoAlt = footer?.logo?.alt || "rexpt";
  const copyright = footer?.copyright || `Copyright ${year} © rexpt`;

  const socials =
    Array.isArray(footer?.socials) && footer.socials.length
      ? footer.socials
      : [
          {
            platform: "linkedin",
            url: "https://www.linkedin.com/company/rxpt/",
            newTab: true,
          },
          {
            platform: "instagram",
            url: "https://www.instagram.com/rexptus/",
            newTab: true,
          },
          {
            platform: "facebook",
            url: "https://www.facebook.com/rexptus",
            newTab: true,
          },
          {
            platform: "youtube",
            url: "https://www.youtube.com/@rexptin",
            newTab: true,
          },
        ];

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <img src={logoSrc} alt={logoAlt} className={styles.logo} />
        </div>
        <div className={styles.center}>
          <p>{copyright}</p>
        </div>
        <div className={styles.right}>
          {socials.map((s, i) => {
            const href = s.url;
            const target = s.newTab === false ? "_self" : "_blank";
            const rel = s.newTab === false ? undefined : "noopener noreferrer";
            const aria = s.ariaLabel || `Visit us on ${s.platform || "social"}`;
            const imgSrc = s.icon?.src || platformIconSrc(s.platform);
            const imgAlt = s.icon?.alt || (s.platform ? s.platform : "social");

            if (!href) return null;
            return (
              <a
                key={`${s.platform || "social"}-${i}`}
                href={href}
                target={target}
                rel={rel}
                aria-label={aria}
              >
                <img src={imgSrc} alt={imgAlt} />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};
export default Footer;
