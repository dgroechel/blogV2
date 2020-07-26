---
title: Blog Refresh- Why I Choose Next.js over Gatsby
slug: blog-Refresh-Why-I-Chose-Nextjs-Over-Gatsbyjs
date: "07-"
description: "I've been slacking on my blog posts. I had a goal of 12 for the year (one per month) and so far I have one post. ONE! This was partially due to the framework I was using to create the blog..."
image: "/DG.png"
---

<div>

I've been slacking on my blog posts. I had a goal of 12 for the year (one per month) and so far I have one post. ONE! This was partially due to the framework I was using to create the blog. It was a simple create-react-app template that was difficult to make changes to, not to mention it didn't perform well. 

<div style="text-align:center">
<img src="https://dgreshblog.s3.amazonaws.com/originalBlogPerf.png" alt="Dgroechel.com Performance" width="99%" height="99%"/>
</div>

<h2>Choosing The Next Blog Framework</h2>

It seems there's a new javascript framework that pops up daily so it was tough to pick one. After some research, I settled between two: Gatsby.js and Next.js. Both have big logos such as Nike, Netflix, and Spotify that use them and they allow you to scaffold up a project easily. Here is a breakdown:

<h3>Gatsby: </h3>

Gatsby is an open-source static site generator "based on React that helps developers build blazing-fast websites and apps"  It has a large selection of plugins that allow you to easily connect anything from Google Analytics to Mailchimp to your site. It also uses GraphQL on the backend which allows you to create pages without any data and create pages from JSON with images.  It creates great websites with awesome performance, as can be seen below from our wedding website: 

<div style="text-align:center">
<img src="https://dgreshblog.s3.amazonaws.com/loveonHHISland.png" alt="Dgroechel.com Performance" width="99%" height="99%"/>
</div>

While this all sounds good you need multiple plugins just for the site to work. I found this annoying that you needed a plugin to add Google Analytics to your site easily. Another downfall is GraphQl. GraphQL is overkill for a simple static site. Its also hard to debug, so you can spend tons of time trying to debug why a simple image won't load on your site. 

<h3>Next.js: </h3>

Next.js is a framework that offers both server-side rendering (SSR) and static site generation (SSG). You can easily create an SSR and SSG hybrid site using a combo of `getStaticProps`, `getServerSideProps`, and `getStaticPaths`. Then plugin your favorite NPM or Yarn packages and you are ready to go! 

<h2>Why I Chose Next.js</h2>

Two simple reasons: 
<ol>
<li>No clunky plugins</li>
<li>No GraphQL </li>
</ol>
It's as simple as that! Both platforms are great in their own ways and create blazingly fast websites but Next.js just worked for me. I'm not a huge fan of GraphQl for simple projects. Is Next.js overkill for a simple blog - absolutely! But if you know me I love going one to two steps beyond what is required and trying new technologies. 

<div style="text-align:center">
<img src="https://dgreshblog.s3.amazonaws.com/loveonHHISland.png" alt="Dgroechel.com New Performance" width="99%" height="99%"/>
</div>

<h3>What do you think of the new blog? Leave a comment and let me know! </h3>

</div>