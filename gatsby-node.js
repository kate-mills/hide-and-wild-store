const path = require('path')


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/checkout/)) {
    page.matchPath = "/checkout/*"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: { items },
  } = await graphql(`
    query {
      items: allContentfulHilaryJewelry {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  items.edges.forEach(item => {
    createPage({
      path: `/shop/${item.node.slug}`,
      component: path.resolve(`src/templates/item-template.js`),
      context: { slug: item.node.slug },
    })
  })

}
