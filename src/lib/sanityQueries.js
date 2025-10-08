// sanityQueries.js
export const fetchHeroSection = `
  *[_type == "FreeHeroSection" && enabled == true][0] {
    title,
    featuresTitle,
    features[] {
      text
    },
    cta {
      joinImage,
      joinUrl,
      WatchDemoImage,
      WatchRexUrl
    }
  }
`;