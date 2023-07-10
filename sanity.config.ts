import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'


const config = defineConfig({
  projectId: "2r1izu8i",
  dataset: "production",
  title: "chownow",
  apiVersion: "2023-07-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas}
});

export default config;
