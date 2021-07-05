export default {
  "title": "Bit Form | Top free form builder in WordPress | Fastest Form-Builder",
  "tagline": "WP Bit Form made easy to build a form in wordpress with database management system.",
  "url": "https://docs.bitform.bitpress.pro/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Bit-Press",
  "projectName": "bitform-documentation",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "💡",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "🌑",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "navbar": {
      "title": "Bit Form",
      "logo": {
        "alt": "Bit-Form Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "/docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "/docs/changelog/BitForm-changelog-timeline",
          "label": "Changelogs",
          "position": "left",
          "activeBasePath": "/docs/changelog"
        },
        {
          "href": "https://downloads.wordpress.org/plugin/bit-form.zip",
          "label": "Free Download",
          "position": "right",
          "className": "download-btn"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Install & Activate",
              "to": "docs/install-activate-wordpress-frombuilder-bitform"
            },
            {
              "label": "Form Fields",
              "to": "docs/wpbitform-field-types"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/groups/bitcommunityusers"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "How tos",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/Bit-Press/bitform-documentation/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 BitApps."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "E:\\RF\\laragon\\www\\bitform-documentation\\sidebars.js",
          "editUrl": "https://github.com/Bit-Press/bitform-documentation"
        },
        "changelog": {
          "path": "changelog",
          "sidebarPath": "E:\\RF\\laragon\\www\\bitform-documentation\\sidebars.clog.js"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Bit-Press/bitform-documentation"
        },
        "theme": {
          "customCss": "E:\\RF\\laragon\\www\\bitform-documentation\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "@docusaurus/plugin-ideal-image"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  ],
  "scripts": [
    {
      "src": "/scripts/tawk.to.js",
      "defer": true
    }
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};