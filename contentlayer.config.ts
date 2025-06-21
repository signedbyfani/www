import fs from "fs";
import path from "path";

import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const blogComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    image: { type: "string", required: false },
  },
  computedFields: blogComputedFields,
}));

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    bigTitle: { type: "string", required: false },
    summary: { type: "string", required: true },
    date: { type: "string", required: true },
    image: { type: "string", required: false },
    coverVideo: { type: "string", required: false },
    category: { type: "string", required: false },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
