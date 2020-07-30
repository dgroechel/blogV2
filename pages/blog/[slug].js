import React from "react";
import Navbar from "../../components/Navbar";
import { Container, Divider } from "@material-ui/core";
import Copyright from "../../src/Copyright";
import SubscribeForm from "../../components/SubscribeForm";
import Head from 'next/head'


function BlogPostPage(props) {
  return (
    <div>
      <Head>
       <title>Blog | {props.blog.title}</title> 
       <meta property="og:url" content={`https://www.dgroechel.com/posts/${props.blog.slug}`} />
       <meta property="og:type" content="article" />
       <meta property="og:title" content={`Blog | ${props.blog.title}`} />
       <meta property="og:description" content={props.blog.description} />
       <link rel="shortcut icon" href="/DG.ico" />
      </Head>
      <Container maxWidth="md">
      <Navbar />
      <h1>{props.blog.title}</h1>
      <section
        dangerouslySetInnerHTML={{ __html: props.blog.content }}
      ></section>
      <br/>
      <Divider />
      <SubscribeForm />
      <Copyright/>
      </Container>
    </div>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/posts/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

  const path = `${process.cwd()}/posts`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
