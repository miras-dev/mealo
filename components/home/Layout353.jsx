import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export const Layout353 = (props) => {
  const { tagline, heading, description, buttons, featureSections } = {
    ...Layout353Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-24">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            {featureSections.map((section, index) => (
              <div
                key={index}
                className="sticky mb-12 border border-border-primary bg-background-primary p-8 md:mb-16"
                style={{ top: `${8 + index * 2}rem` }}
              >
                <div className="mb-3 md:mb-4">
                  <img src={section.icon.src} alt={section.icon.alt} className="size-12" />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout353Defaults = {
  tagline: "Simple",
  heading: "Four steps to better eating",
  description:
    "From choosing your plan to enjoying fresh meals at your door",
  buttons: [
    { title: "Next", variant: "secondary" },
    {
      title: "Next",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  featureSections: [
    {
      icon: {
        src: "/images/CompanyLogo.svg",
        alt: "Step 1 icon",
      },
      title: "Pick your plan and goals",
      description:
        "Select Normal, Executive, or a goal-based plan that fits your life",
    },
    {
      icon: {
        src: "/images/CompanyLogo.svg",
        alt: "Step 2 icon",
      },
      title: "Choose meals for the week",
      description:
        "Browse the weekly menu and select what appeals to you",
    },
    {
      icon: {
        src: "/images/CompanyLogo.svg",
        alt: "Step 3 icon",
      },
      title: "We prepare fresh each morning",
      description:
        "Hygienically cooked with fresh ingredients, calorie-matched to your targets",
    },
    {
      icon: {
        src: "/images/CompanyLogo.svg",
        alt: "Step 4 icon",
      },
      title: "Delivered to your door daily",
      description:
        "Same time, every day, across Masdar City, Khalifa City, Shabiya, and Musaffah",
    },
  ],
};
