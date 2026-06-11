import { useEffect } from 'react';

const noIndexContent = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
const crawlerMetaNames = [
  'robots',
  'googlebot',
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'Google-Extended',
  'PerplexityBot',
  'CCBot',
  'FacebookBot',
  'meta-externalagent',
  'Bytespider',
  'Amazonbot',
  'Applebot-Extended',
  'cohere-ai',
];

export function useLegalPageMeta() {
  useEffect(() => {
    // Adds route-scoped meta tags to discourage search engines and AI crawlers from indexing legal pages.
    const metaTags = crawlerMetaNames.map(ensureMetaTag);

    return () => {
      metaTags.forEach((metaTag) => metaTag.remove());
    };
  }, []);
}

function ensureMetaTag(name: string): HTMLMetaElement {
  const metaTag = document.createElement('meta');
  metaTag.name = name;
  metaTag.content = noIndexContent;
  metaTag.dataset.routeMeta = 'legal';
  document.head.append(metaTag);
  return metaTag;
}
