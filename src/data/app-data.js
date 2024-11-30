import { nanoid } from "nanoid";

export const navigationLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/board", label: "Board" },
  { id: 3, path: "/about", label: "About" },
  { id: 4, path: "/contact", label: "Contact" },
];

export const lists_data = [
  {
    id: nanoid(),
    title: "List1",
    cards: [
      { id: nanoid(), card: "Card 1" },
      { id: nanoid(), card: "Card 2" },
      { id: nanoid(), card: "Card 3" },
    ],
  },
];

export const technologies = [
  {
    id: 1,
    category: "Core",
    items: [
      { name: "React", description: "Modern UI development library" },
      { name: "Vite", description: "Next generation frontend tooling" },
    ],
  },
  {
    id: 2,
    category: "State Management",
    items: [
      {
        name: "Zustand",
        description: "Simple and scalable state management",
      },
    ],
  },
  {
    id: 3,
    category: "Drag & Drop",
    items: [
      {
        name: "dnd kit",
        description: "Modern drag and drop toolkit for React",
      },
    ],
  },
  {
    id: 4,
    category: "Version Control & Collaboration",
    items: [
      { name: "Git", description: "Distributed version control system" },
      {
        name: "GitHub",
        description: "Cloud-based Git repository hosting service",
      },
    ],
  },
  {
    id: 5,
    category: "Routing & Utilities",
    items: [
      { name: "React Router", description: "Dynamic routing solution" },
      { name: "Nanoid", description: "Unique ID generation" },
    ],
  },
  {
    id: 6,
    category: "Form Management & Validation",
    items: [
      {
        name: "React Hook Form",
        description: "Performant form management with less code",
      },
      { name: "Yup", description: "Schema-based form validation" },
    ],
  },
];

export const benefits = [
  {
    id: 1,
    text: "Better visibility",
  },
  {
    id: 2,
    text: "Improved efficiency",
  },
  {
    id: 3,
    text: "Increased productivity",
  },
  {
    id: 4,
    text: "Preventing team overburden",
  },
  { id: 5, text: "Increased team focus" },
  { id: 6, text: "Reduced waste" },
  { id: 7, text: "Flexibility" },
  { id: 8, text: "Improved collaboration" },
  { id: 9, text: "Improved company culture" },
  { id: 10, text: "Cost savings" },
  { id: 11, text: "Acts as a hub for information" },
  { id: 12, text: "Fun to use!" },
];

export const CONTACT_FIELDS = [
  {
    name: "name",
    label: "Name",
    required: true,
    placeholder: "Enter your Name",
    autoComplete: "name",
    className: "contact__field--name",
  },
  {
    name: "email",
    label: "Email",
    required: true,
    type: "email",
    placeholder: "Enter your Email",
    autoComplete: "email",
    className: "contact__field--email",
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Company",
    autoComplete: "organization",
    className: "contact__field--company",
  },
  {
    name: "job",
    label: "Job Title",
    placeholder: "Job Title",
    autoComplete: "job-title",
    className: "contact__field--job",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your Phone Number",
    autoComplete: "tel",
    className: "contact__field--phone",
  },
  {
    name: "message",
    label: "Message",
    required: true,
    placeholder: "Enter your Message",
    autoComplete: "off",
    className: "contact__field--message",
    fieldtype: "textarea",
  },
];
