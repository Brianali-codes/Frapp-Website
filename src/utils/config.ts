import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "FRAPP",
  seo: {
    title: "Frapp - Video Game Giveaways & Gaming Deals Tracker",
    description: "Get premium videogame giveaways and tracking tools with Frapp.",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.png",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/luh_bryxe",
      facebook: "https://facebook.com/luh%20bryxe",
      twitter: "https://x.com/brianali427",
    },
    links: [
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Frapp Mobile Today!",
    subtitle:
      "Experience the ultimate convenience and never miss a free gaming title again. Download now to enjoy seamless access to all our aggregated game deals right at your fingertips.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Frapp - Your Ultimate App for Video game giveaways And Video Game Deals",
      description: "FRAPP (Freebie Radar App) is a clean, open-source utility aggregating the latest video game giveaways and premium game deals from Steam, Epic Games, GOG, and more, powered by the GamerPower and CheapShark APIs.",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
        },
        {
          name: "Bob Smith",
          comment:
            "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
        },
        {
          name: "Charlie Brown",
          comment:
            "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
        },
        {
          name: "Dana White",
          comment:
            "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
        },
        {
          name: "Eve Adams",
          comment:
            "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
        },
      ],
    },
    partners: {
      title: "As seen on",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/aws.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how to operate the app and claim your giveaways with ease. Follow these simple instructions to get started and make the most out of our platform.",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "/stock/01.webp",
        },
        {
          title: "Explore Features",
          subtitle:
            "Navigate through the app to discover various giveaways and free games.",
          image: "/stock/04.webp",
        },
        {
          title: "Redeem your giveaways",
          subtitle:
            "Follow the instructions provided in the app to redeem your giveaways and enjoy your free games.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Never Pay Full Price For Games Again",
      subtitle:
        "Track every storefront, secure global platform listings, and stack up your gaming library on the go.",
      cards: [
        {
          title: "Multi-Storefront Tracking",
          subtitle:
            "Connect effortlessly with active databases across Steam, Epic Games Store, GOG, and Itch.io without parsing through individual forums yourself.",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Real-Time Deal Radars",
          subtitle:
            "Get instant updates whenever premium indie hits or AAA blockbusters experience flash price drops or limited-time free redemption windows.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Clean API Aggregation",
          subtitle:
            "Powered continuously by reliable data streams from GamerPower and CheapShark APIs to bring you validated, spam-free discount links.",
          icon: "/3D/roll-brush-front-color.webp",
        },
        {
          title: "100% Safe Verification",
          subtitle:
            "Our open-source framework guarantees absolute security. Track and claim free game distributions with structural safety rules built in.",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is Frapp?",
          answer:
            "Frapp is a specialized mobile app designed to help you build your game library for free. We track major digital storefronts and alert you the moment a paid game becomes available for free.",
        },
        {
          question: "Is Frapp actually free to use?",
          answer:
            "Yes! Frapp is completely free to use. We do not charge any fees for accessing our services or receiving notifications about free game giveaways. Our goal is to help gamers expand their libraries without any cost.",
        },
        {
          question: "Which platforms do you track?",
          answer:
            "We track major digital storefronts including Gog, itch.io, Epic Games, Steam, and more. Our app ensures you never miss out on the latest free game giveaways across these platforms.",
        },
        {
          question: "Is it safe to install the APK?",
          answer:
            "Yes, it is safe to install the APK. We only distribute the official APK files from our website, and they are scanned for malware before being made available for download.",
        },
      ],
    },
    header: {
      headline: "Your Ultimate App for Video game Deals And Giveaways",
      subtitle:
        "FRAPP (Freebie Radar App) is a clean, open-source utility aggregating the latest video game giveaways and premium game deals from Steam, Epic Games, GOG, and more, powered by the GamerPower and CheapShark APIs.",
      screenshots: [
        "/screenshots/3.webp",
        "/screenshots/2.webp",
        "/screenshots/1.webp",
      ],
      rewards: ["Over Two Thousand \n Downloads", "Open source"],
      usersDescription: "2000+ Downloads",
      headlineMark: [1, 3],
    },
    pricing: {
      id: "pricing",
      title: "Pricing Plans",
      subtitle: "Frapp is an open-source project dedicated to keeping gaming accessible.",
      actionText: "Download the app",
      plans: [
        {
          title: "Community Free Edition",
          price: "$0/forever",
          featured: true,
          rows: [
            "Access to all basic & advanced features",
            "Real-time notifications for giveaways",
            "Full Steam, GOG, & Epic Games tracking",
            "100% open-source visibility",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Frapp Game Tracker",
      description: "Privacy Policy statements and data collection outlines for the Frapp platform.",
    },
    content: `# Privacy Policy

**Effective Date:** 5th of May, 2026

## Introduction

Welcome to Frapp. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, we may collect your name, email address, and other contact information.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us directly.
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Frapp 
brianali427@gmail.com

`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Frapp Game Tracker",
      description: "Cookies Policy management details for Frapp visitors.",
    },
    content: `# Cookies Policy

**Effective Date:** 5th of May, 2026

## Introduction

This Cookies Policy explains how Frapp uses cookies and similar technologies to recognize you when you visit our application. It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:** These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:** These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:** These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:** These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

Frapp
brianali427@gmail.com

`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Frapp Game Tracker",
      description: "Terms and conditions of service for using the Frapp mobile application.",
    },
    content: `# Terms and Conditions

**Effective Date:** 5th of May, 2026

## Introduction

Welcome to Frapp. These Terms and Conditions ("Terms") govern your use of the App provided by Frapp ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least 13 years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of Frapp or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, Frapp shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless Frapp, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with standard digital property provisions, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of applicable regional courts to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

Frapp
brianali427@gmail.com

`,
  },
};

export default templateConfig;