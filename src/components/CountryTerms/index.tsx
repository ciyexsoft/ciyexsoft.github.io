import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { useCountry, COUNTRIES } from '@site/src/context/CountryContext';

/**
 * Swaps the product noun in *shared* content to match the locale being viewed.
 *
 * Each locale has its own pages, so those already read correctly. The blog is
 * deliberately shared between markets, and it is authored with the US term
 * ("EHR"). This rewrites those posts to "HIMS" on the India site so the wording
 * stays consistent, without maintaining 72 duplicate posts.
 *
 * On the US site this is a no-op.
 */

const BASE_TERM = COUNTRIES.US.product; // "EHR"
const TERM_PATTERN = new RegExp(`\\b${BASE_TERM}\\b`, 'g');

// Never rewrite code samples, commands, or URLs.
const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'CODE',
  'PRE',
  'TEXTAREA',
  'NOSCRIPT',
  'KBD',
  'SAMP',
]);

const originals = new WeakMap<Text, string>();

function collectTextNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest('[data-no-term-swap]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  return nodes;
}

function applyTerm(term: string) {
  for (const node of collectTextNodes(document.body)) {
    if (!originals.has(node)) {
      const value = node.nodeValue ?? '';
      TERM_PATTERN.lastIndex = 0;
      if (!TERM_PATTERN.test(value)) continue;
      TERM_PATTERN.lastIndex = 0;
      originals.set(node, value);
    }

    const source = originals.get(node)!;
    const next = source.replace(TERM_PATTERN, term);
    if (node.nodeValue !== next) {
      node.nodeValue = next;
    }
  }
}

export default function CountryTerms(): null {
  const { current } = useCountry();
  const location = useLocation();

  useEffect(() => {
    if (current.product === BASE_TERM) return;

    // Let the route's content commit before rewriting it.
    const frame = requestAnimationFrame(() => {
      applyTerm(current.product);
      document.title = document.title.replace(TERM_PATTERN, current.product);
    });

    return () => cancelAnimationFrame(frame);
  }, [current.product, location.pathname]);

  return null;
}
