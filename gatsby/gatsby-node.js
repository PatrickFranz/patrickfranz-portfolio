const path = require(`path`);

// Create Project pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectPage = path.resolve(`src/templates/ProjectPage.js`);
  const result = await graphql(`
    query {
      projects: allSanityPortfolio {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  result.data.projects.edges.forEach((edge) => {
    createPage({
      path: `project/${edge.node.slug.current}`,
      component: projectPage,
      context: {
        title: edge.node.title,
      },
    });
  });
};
