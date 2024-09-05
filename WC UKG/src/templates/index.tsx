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
      className="wealth-manager"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/skyline-aerial-landscape-metropolitan-city_482257-14002.jpg?t=st=1724749731~exp=1724753331~hmac=5d636149e76abb35f7e6930c316bda95c92d3375952688300a846d7eecfe916e&w=1800')",
      }}
    >
      <img
        src="https://img.freepik.com/premium-photo/man-with-shirt-that-says-he-is-smiling_1139891-2591.jpg?w=1380"
        alt="Ali Hussain"
        aria-label="Ali Hussain - Wealth Manager"
      />
      <article className="manager-info">
        <h1>Ali Hussain</h1>
        <p>Wealth Advisor</p>
        <address>
          Wolf Creek, Montana
          <br />
          Capital Fins Bank
          <br />
          (406) 555-2345 |{" "}
          <a href="mailto:ali.hussain@capitalfins.com">ali.hussain@capitalfins.com</a>
        </address>
        <a href="#" className="cta-button" aria-label="Request An Appointment">
          Request An Appointment
        </a>
      </article>
    </section>



<section className="about-manager">
        <h2>About</h2>
        <p>
          Ali Hussain is a dedicated Wealth Manager at Capital Fins Bank, living in Wolf Creek, Montana. 
          With a background rooted in finance from an early age, Ali's strategic investment approaches have consistently 
          delivered exceptional returns for his clients. His unwavering commitment to excellence earned him the prestigious 
          Pinnacle Award for Wealth Management at a young age. Outside of work, he enjoys fishing, home brewing, and solving 
          crossword puzzles, which keep him intellectually stimulated and creatively engaged.
        </p>
      </section>

      <section className="manager-career">
        <h2>Education and Professional Journey</h2>
        <ul>
          <li>
            <strong>Bachelor's Degree in Finance</strong> - University of Michigan, 2008 (Dean's List, President of the Finance Club)
          </li>
          <li>
            <strong>MBA in Financial Management</strong> - Harvard Business School, 2012 (Graduated with Distinction)
          </li>
          <li>
            <strong>Certified Financial Planner (CFP)</strong> - 2013, Certified Financial Planner Board of Standards, Inc.
          </li>
          <li>
            <strong>Chartered Financial Analyst (CFA)</strong> - 2015, CFA Institute
          </li>
          <li>
            <strong>Certified Wealth Strategist (CWS)</strong> - 2016, Cannon Financial Institute
          </li>
          <li>
            <strong>Junior Financial Analyst</strong> - Goldman Sachs, New York, NY (2008 - 2010)
          </li>
          <li>
            <strong>Wealth Management Associate</strong> - Morgan Stanley, Chicago, IL (2012 - 2015)
          </li>
          <li>
            <strong>Senior Wealth Manager</strong> - J.P. Morgan Private Bank, San Francisco, CA (2015 - 2018)
          </li>
          <li>
            <strong>Director of Wealth Management</strong> - Capital Fins Bank, Wolf Creek, MT (2018 - Present)
          </li>
        </ul>
      </section>

      <section className="articles-insights">
      <h2>Articles and Insights by Ali Hussain</h2>
      <article>
        <img
          src="https://media.istockphoto.com/id/1346853640/photo/saving-money-concept-man-hand-putting-row-and-coin-write-finance-saving-money-concept-man.jpg?s=612x612&w=0&k=20&c=1I48V9GUU0liAJ-dMA4SW-h5LoejkBTlEZJ-0b_vmXE="
          alt="Article Image 1"
          aria-label="Article Image 1"
        />
        <h3>Understanding Wealth</h3>
        <p>
          A brief overview of effective strategies to manage wealth and ensure long-term growth.
        </p>
        <a href="#" className="cta-button" aria-label="Read More on Wealth Management Strategies">
          Read More
        </a>
      </article>
      <article>
        <img
          src="https://blog.geojit.com/wp-content/uploads/2018/05/iStock_000037133790_Double.jpg"
          alt="Article Image 2"
          aria-label="Article Image 2"
        />
        <h3>Investment Planning for the Future</h3>
        <p>
          Learn about the importance of planning your investments early for a secure future.
        </p>
        <a href="#" className="cta-button" aria-label="Read More on Investment Planning">
          Read More
        </a>
      </article>
      <article>
        <img
          src="https://weitzinvestments.com/sitefiles/live/images/Navigating%20Volatility_iStock-1144604465-min.jpg"
          alt="Article Image 3"
          aria-label="Article Image 3"
        />
        <h3>Navigating Market Volatility</h3>
        <p>
          Explore strategies to navigate and thrive during periods of market volatility.
        </p>
        <a href="#" className="cta-button" aria-label="Read More on Navigating Market Volatility">
          Read More
        </a>
      </article>
    </section>

    <section className="schedule-appointment">
      <h2>Let's Talk!</h2>
      
      <article className="appointment-text">
        <p>
          At Capital Fins Bank, our advisors are dedicated to the highest standards of ethics, always putting customers first. 
          With a proud legacy of excellence, we are committed to helping you achieve your financial goals. 
          Let us guide you on your journey—schedule an appointment using the button below.
        </p>
      </article>
      
      <img 
        src="https://media.istockphoto.com/id/1197831809/vector/male-hand-holding-megaphone-with-lets-talk-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=sIgn6Yz1eQF2NPvzLabS2xmR_vrnzNOSCtwKDkeMSLs=" 
        alt="Map Image" 
        aria-label="Map Image" 
      />
      
      <a href="#" className="cta-button" aria-label="Schedule an Appointment">
        Schedule an Appointment
      </a>
    </section>

    </PageLayout>
  );
};

export default Search;
