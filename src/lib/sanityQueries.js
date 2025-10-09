// Hero Section
export const fetchHeroSection = `
  *[_type == "FreeHeroSection" && enabled == true][0]{
    enabled,
    title,
    titlePrefix,
    titleHighlight,
    titleMain,
    titleSuffix1,
    titleSuffix,
    highlightUnderline,
    "titleParts": [
      coalesce(titlePrefix, ""),
      coalesce(titleHighlight, ""),
      coalesce(titleMain, ""),
      coalesce(titleSuffix, "")
    ],
    featuresTitle,
    features,
    cta{
      joinImage,
      joinUrl,
      WatchDemoImage,
      WatchRexUrl
    },
    heroGif,
  }
`;
// Badge Section
export const fetchBadgeSection = `
  *[_type == "BadgeSection"][0]{
    enabled,
    line1,
    line2,
    badges[]{
      "src": asset->url,
      alt
    }
  }
`;
// How It Works
export const fetchHowItWorks = `
*[_type == "HowItWorks"][0]{
enabled,
sectionLabel,
  headlinePrefix,
  headlineHighlight,
  headlineSuffix,
  steps[]{
    title,
    description,
    "descriptionPlain": pt::text(description),
    "icon": { "src": icon.asset->url, "alt": icon.alt }
  },
  ctaCard{
    "logo": { "src": logo.asset->url, "alt": logo.alt },
    title,
    subtext,
    ctaLabel,
    finePrint,
    "titlePlain": pt::text(title),
    "subtextPlain": pt::text(subtext),
    "ctaLabelPlain": pt::text(ctaLabel),
    "finePrintPlain": pt::text(finePrint),
    emailPlaceholder
  }
}
`;
// Key Features
export const fetchKeyFeaturesSection = `
*[_type == "FreeKeyFeaturesSection"][0]{
enabled,
sectionLabel,
  title,
  subtext,
  "titlePlain": pt::text(title),
  "subtextPlain": pt::text(subtext),
  cta{
    "image": { "src": image.asset->url, "alt": image.alt },
    url
  },
  features[]{
    title,
    description,
    highlightTile,
    "icon": { "src": icon.asset->url, "alt": icon.alt }
  }
}
`;
export const fetchWhyRexptSection = `
*[_type == "WhyRexptSection"][0]{
enabled,
  sectionLabel,
  title,
  "titlePlain": pt::text(title),
  benefits[]{
    title,
    description,
    tone,
    rounded,
    "illustration": {"src": illustration.asset->url, "alt": illustration.alt}
  }
}
`;
export const fetchTestimonialsSection = `
*[_type == "FreeTestimonialsSection"][0]{
enabled,
  sectionLabel,
  title,
  "titlePlain": pt::text(title),
  subtext,
  "subtextPlain": pt::text(subtext),
  layout,
  items[]{
    author,
    Services,
    company,
    rating,
    quote,
    "quotePlain": pt::text(quote)
  }
}
`;
export const fetchGetInTouch = `
*[_type == "FreeGetInTouch" && enabled == true][0]{
  enabled,
  sectionLabel,
  headline,
  "headlinePlain": pt::text(headline),
  subheading,
  "subheadingPlain": pt::text(subheading),
  cta{
    "image": { "src": image.asset->url, "alt": image.alt },
    url,
    label
  },
  "rightGraphic": { "src": rightGraphic.asset->url, "alt": rightGraphic.alt }
}
`;
export const fetchFaqSection = `
*[_type == "FreeFaqSection" && enabled == true][0]{
  enabled,
  sectionLabel,
  headline,
  "headlinePlain": pt::text(headline),
  categories[]{
    title,
    featured{
      question,
      answer,
      "answerPlain": pt::text(answer)
    },
    faqs[]{
      question,
      answer,
      "answerPlain": pt::text(answer),
      defaultOpen
    }
  }
}
`;
export const fetchFooterSection = `
*[_type == "FreeFooter" && enabled == true][0]{
  enabled,
  "logo": { "src": logo.asset->url, "alt": logo.alt },
  copyright,
  socials[]{
    platform,
    url,
    ariaLabel,
    newTab,
    "icon": select(
      defined(icon) => { "src": icon.asset->url, "alt": icon.alt },
      // if no custom icon, return null so the frontend can use a default
      true => null
    )
  }
}
`;
