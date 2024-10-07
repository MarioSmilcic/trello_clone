import { ContactInput, ContactTextArea } from "./FormComponents.jsx";

export const fields = [
  {
    id: 1,
    component: ContactInput,
    props: {
      label: "Name",
      name: "name",
      placeholder: "Enter your Name",
      required: true,
    },
  },
  {
    id: 2,
    component: ContactInput,
    props: {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      required: true,
    },
  },
  {
    id: 3,
    group: true,
    fields: [
      {
        id: 4,
        component: ContactInput,
        props: {
          label: "Company",
          name: "company",
          placeholder: "Company",
        },
      },
      {
        id: 5,
        component: ContactInput,
        props: {
          label: "Job Title",
          name: "job",
          placeholder: "Job Title",
        },
      },
    ],
  },
  {
    id: 6,
    component: ContactInput,
    props: {
      label: "Phone Number",
      name: "phone",
      placeholder: "Enter your Phone Number",
    },
  },
  {
    id: 7,
    component: ContactTextArea,
    props: {
      label: "Message",
      name: "message",
      placeholder: "Enter your Message",
      required: true,
    },
  },
];
