import { CONTACT_FIELDS } from "@/data/app-data";

export const DEFAULT_VALUES = Object.fromEntries(
  CONTACT_FIELDS.map((field) => [field.name, ""])
);
