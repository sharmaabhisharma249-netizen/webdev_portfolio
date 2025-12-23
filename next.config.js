const isGitHubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  // Produce a static HTML export with `next export`
  output: 'export',

  // Use trailingSlash so exported paths map to directories (helps GitHub Pages)
  trailingSlash: true,

  // If your site uses absolute asset paths, enable basePath/assetPrefix for Pages.
  // When the workflow sets GITHUB_PAGES=true, these will apply.
  basePath: isGitHubPages ? '/webdev_portfolio' : '',
  assetPrefix: isGitHubPages ? '/webdev_portfolio/' : ''
};
