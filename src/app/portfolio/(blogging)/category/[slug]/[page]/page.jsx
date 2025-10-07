import { getAllCategories, getPostsByCategory, getRecentPosts } from "@/lib/blogging";
import SectionHeading from "@/components/utils/SectionHeading";

import Link from "next/link";
import React from "react";
import PostsShowcase from "../../../_components/PostsShowcase";
import PostsSidebar from "../../../_components/PostsSidebar";

export function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

export default function PostsPage({ params }) {
  const { slug, page } = params;

  const { posts, hasMore } = getPostsByCategory(slug, page, 6);
  const categories = getAllCategories();
  const recentPosts = getRecentPosts();

  return (
    <React.Fragment>
      <div className="blogs py-24 lg:py-28 xl:py-32 min-h-screen">
        <div className="container mx-auto">
          <SectionHeading title={`${slug.charAt(0).toUpperCase() + slug.slice(1)} Projects`} watermark="Case Studies" animated={false} />
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-9">
              <PostsShowcase posts={posts} />
              <div className="flex gap-3 pt-10 text-center">
                {page !== "1" && (
                  <Link
                    href={`/portfolio/category/${slug}/${String(parseInt(page) - 1)}`}
                    className="btn btn-small"
                  >
                    <span>Prev</span>
                  </Link>
                )}
                {hasMore && (
                  <Link
                    href={`/portfolio/category/${slug}/${String(parseInt(page) + 1)}`}
                    className="btn btn-small"
                  >
                    <span>Next</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <PostsSidebar categories={categories} recentPosts={recentPosts} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
