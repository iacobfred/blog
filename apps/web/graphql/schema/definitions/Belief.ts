import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const BELIEF_FIELDS = ["userId", "name", "description"] as const;
type BeliefFields = typeof BELIEF_FIELDS[number];

const definition: Definition<BeliefFields> = {
  name: "belief",
  fields: {
    userId: { required: true, type: "ID" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
  },
};

export default definition;
