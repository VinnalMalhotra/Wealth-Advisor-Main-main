import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_heroSection",
      "slug",
      "c_relatedArticles.name",
      "c_relatedArticles.c_shortDescriptionV1",
      "c_relatedArticles.c_image",
      "c_relatedArticles.c_author",
      "c_relatedProducts.name",
      "c_relatedProducts.slug",
      "c_relatedProducts.c_shortDescriptionV1",
      "c_relatedProducts.c_image",
    ],
    filter: {
      entityIds: ["home-bank"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath = () => {
  return `index.html`;
};
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "FINS | Homepage",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  const { _site, c_heroSection, c_relatedArticles, c_relatedProducts } =
    document;

  return (
    <PageLayout _site={_site}>
      <section
        className="hero"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <article>
          <h1>{c_heroSection.name}</h1>
        </article>
      </section>
      <section className="products">
        <h2>Our Popular Products</h2>
        {c_relatedProducts.map((item, index) => (
          <article key={index}>
            <figure>
              <img
                src={item.c_image.url}
                alt="Free Checking"
                aria-label="Free Checking Image"
                className="product-image"
              />
              <figcaption>
                <h3>{item.name}</h3>
                <p>{item.c_shortDescriptionV1}</p>
                <a
                  href="#"
                  className="cta-button"
                  aria-label="Learn More About Free Checking"
                >
                  Learn More
                </a>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section className="insights">
        <h2>Insights</h2>

        {c_relatedArticles.map((item, index) => (
          <article key={index}>
            <figure>
              <img
                src={item.c_image.url}
                alt="Free Checking"
                aria-label="Free Checking Image"
                className="product-image"
              />
              <figcaption>
                <h3>{item.name}</h3>
                <p>{item.c_shortDescriptionV1}</p>
                <a
                  href="#"
                  className="cta-button"
                  aria-label="Learn More About Free Checking"
                >
                  Learn More
                </a>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section
        className="locator"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519219788971-8d9797e0928e?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h2>Start Your Financial Journey Today</h2>
        <div className="search-container">
          <input type="text" placeholder="Yext AI Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Search;
