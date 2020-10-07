/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')

exports.onRenderBody = function({ setPreBodyComponents }) {
  setPreBodyComponents([
    React.createElement('link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@0/dist/algoliasearchNetlify.css" }),
    React.createElement('script', { type: "text/javascript", src: "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@0/dist/algoliasearchNetlify.js" }),
    React.createElement('script', { type: "text/javascript", dangerouslySetInnerHTML: {
      __html: `
      algoliasearchNetlify({
        appId: 'GZ7JSDZAEK',
        apiKey: '27011eaa070119a57682636fd78b274a',
        siteId: 'dac6abff-36f5-4149-ade2-085c639c86a8',
        branch: 'master',
      });
      `
    } })
  ])
}