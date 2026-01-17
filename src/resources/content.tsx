import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Process,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sejal",
  lastName: "Gupta",
  name: `Sejal Gupta`,
  role: "Product Designer",
  avatar: "/images/sejal-avatar.jpg",
  email: "sejalprashantgupta6751@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sejal-gupta-360341218/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/sejal-avatar.jpg",
  label: "Home",
  title: `Portfolio Sejal Gupta`,
  description: `Product Designer`,
  headline: <>Building design</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sejal</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: <>I'm Sejal, a Product Designer</>,
};

const about: About = {
  path: "/",
  label: "Home",
  title: `Portfolio Sejal Gupta`,
  description: `Product Designer`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/sejal-gupta-7ftipc/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Designing premium spaces and objects with a future-forward aesthetic —
        blending material exploration, luxury detailing, and strong concept
        storytelling.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "32nd Avenue",
        timeframe: "Jun 2025 – Nov 2025",
        role: "Junior Furniture Designer",
        achievements: [
          <>
            Overseeing detailed 3D modeling, AI design integration, and vendor
            coordination. Utilizing AI-assisted prompt design for rapid
            visualization and concept development. Designing bespoke luxury
            furniture and spatial concepts for hospitality and residential
            clients. Developed a bespoke wine menu box, integrating material
            storytelling and mechanical detailing.
          </>,
          <>
            Increased customer satisfaction by offering consultations and
            providing custom furniture solutions. Collaborated with
            manufacturers to ensure accurate design translation. Expanded
            company’s portfolio by developing a line of outdoor furniture.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sofa.jpeg",
            alt: "Sofa",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Rudrali Jewels Pvt Ltd",
        timeframe: "Mar 2021 – Current",
        role: "Creative Lead",
        achievements: [
          <>
            Oversaw technical production and implementation of online creatives.
            Handled client communications and led meetings with design
            direction.
          </>,
          <>
            Managed and mentored internal and freelance design teams. Designed
            promotional materials effectively communicating brand identity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/rings.jpeg",
            alt: "Rudrali Jewels Pvt Ltd",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Archis International Pvt Ltd",
        timeframe: "Dec 2024 – Mar 2025",
        role: "Creative Lead",
        achievements: [
          <>
            Designed door handle concepts and aluminum profile systems for
            wardrobes. Created Rhino models and technical drawings for
            manufacturing.
          </>,
          <>
            Coordinated with developers and produced rapid 3D-printed
            prototypes.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/handle.jpeg",
            alt: "Rudrali Jewels Pvt Ltd",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Solid Bench",
        path: "https://solidbench.com",
        timeframe: "May 2024 – Jul 2024",
        role: "Product Design Intern",
        achievements: [
          <>
            Created modular furniture renders and exploded views for client
            presentations. Supported prototype detailing and documentation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/table.png",
            alt: "Rudrali Jewels Pvt Ltd",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Design, Product Design",
        description: <>GLS Institute of Design, Ahmedabad. 2021 - 2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "1. Figma",
        description: (
          <>Able to prototype in Ui/Ux design with unnatural speed.</>
        ),
        // tags: [
        //   {
        //     name: "Figma",
        //     icon: "figma",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "2. Rhino",
        description: <>Building 3D models for product visualization.</>,
        // tags: [
        //   {
        //     name: "JavaScript",
        //     icon: "javascript",
        //   },
        //   {
        //     name: "Next.js",
        //     icon: "nextjs",
        //   },
        //   {
        //     name: "Supabase",
        //     icon: "supabase",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog Posts",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1AA1CCB2-5A06-42DB-9A6E-C54746484378.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/3D440EBA-E359-4BDC-B6A3-EA3C571EE41A.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/7F4A988B-62DE-4037-98E3-269514DBFF11.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/767AAED8-4D35-4985-911E-EE4CF4767E7F.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/6987C55F-D64B-4BCB-9B86-9688BF4234EB.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/74403A84-F387-40F7-BDB9-8C9200D80011.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/74453E3C-8C32-47AF-8989-BCF996AA96F9.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/A58A95F7-DB46-4910-9022-F39AFF40D557.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const process: Process = {
  path: "/process",
  label: "Process",
  title: "Design Process",
  description:
    "A structured yet flexible approach to bring your vision to life — from initial concept to execution-ready deliverables.",
  subtitle:
    "A structured yet flexible approach to bring your vision to life — from initial concept to execution-ready deliverables.",
  steps: [
    {
      number: "01",
      icon: "phone",
      title: "Discovery Call",
      description:
        "We start with a short call to understand your brand, space/product needs, timeline, budget, and aesthetic direction.",
      deliverables: [
        "Clear scope + direction + deliverables list",
        "Initial timeline set for final quote",
      ],
      timeline: "Time commitment: the first quote",
    },
    {
      number: "02",
      icon: "lightbulb",
      title: "Concept Direction",
      description:
        "I create the creative direction for the project including moodboards, material + color palette, 2-3 concept sketches, and quick visual/style sketches.",
      deliverables: [
        "Moodboard",
        "Material + Color Palette",
        "2-3 Concept Sketches",
        "Layout Sketches",
      ],
      timeline:
        "Initial delivery: 1 wk following 50% project budget payment (invoice no. 01)",
    },
    {
      number: "03",
      icon: "palette",
      title: "Design Development",
      description:
        "After selecting the direction, I develop the refined design with iterations based on client feedback.",
      deliverables: [
        "3-7 Layout Planning",
        "Furniture Family",
        "3D Visuals",
        "Design Detailing",
      ],
      timeline: "Iterations round: the 60%-65% of the project value",
    },
    {
      number: "04",
      icon: "check",
      title: "Final Deliverables",
      description:
        "All final outputs are delivered in a client-professional format, execution-ready.",
      deliverables: [
        "Final Materials + Finishes",
        "CAD Plans (if required)",
        "Drawings / Measurements",
        "Presentation Deck (PDF)",
      ],
      timeline:
        "Execution: ready design package Final payments between (25-40% of project)",
    },
    {
      number: "05",
      icon: "tools",
      title: "Execution Support",
      description:
        "If you like, I help with vendor coordination, material finalization, and production feasibility support.",
      deliverables: [
        "Vendor Coordination",
        "Updates if Execution",
        "Production Feasibility Support",
      ],
      timeline: "Timeline / weekly support fee",
    },
  ],
  payment: {
    title: "Payment Structure",
    subtitle:
      "Pricing is based on: time-hours, flexibility, number of considerations, deliverables, and client-guidance / technical agility.",
    advance: {
      percentage: "50%",
      subtitle: "Upon booking + briefing",
    },
    midProject: {
      percentage: "30%",
      subtitle: "After scope / iteration",
    },
    final: {
      percentage: "20%",
      subtitle: "Before final delivery",
    },
    disclaimer: "*Payment split can be adjusted based on project requirements.",
  },
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  process,
};
