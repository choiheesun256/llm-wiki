import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Heesun LLM wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "choiheesun256.github.io/LLM-wiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans KR",
        body: "Noto Sans KR",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f5ef",
          lightgray: "#dfd6c8",
          gray: "#a09584",
          darkgray: "#5a5247",
          dark: "#1f1d1a",
          secondary: "#8c5e3c",
          tertiary: "#4f7d73",
          highlight: "rgba(140, 94, 60, 0.12)",
          textHighlight: "#ffe49a88",
        },
        darkMode: {
          light: "#171512",
          lightgray: "#39322b",
          gray: "#72675a",
          darkgray: "#ddd5c9",
          dark: "#f5efe6",
          secondary: "#d2a679",
          tertiary: "#7eb5a7",
          highlight: "rgba(210, 166, 121, 0.12)",
          textHighlight: "#8f780033",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disabled here because local builds in this environment do not allow the remote fetches it needs.
      // Re-enable when building in an unrestricted environment if OG card generation is desired.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
