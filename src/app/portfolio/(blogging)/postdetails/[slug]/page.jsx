import { Comments } from "@/components/utils";
import SectionHeading from "@/components/utils/SectionHeading";
import { getSinglePost } from "@/lib/blogging";
import React from "react";
import PostDetails from "./_components/PostDetails";

export function generateMetadata({ params }) {
  const { slug } = params;

  const postData = getSinglePost(slug);

  return {
    title: postData.title,
  };
}

export default function PostDetailsPage({ params: { slug } }) {
  const postData = getSinglePost(slug);

  return (
    <React.Fragment>
      <div className="single-post py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto">
          <SectionHeading title={postData.title} watermark="Case Study" animated={false} />
          <PostDetails postData={postData} />
          <div className="post-comments mt-8">
            <Comments title={postData.title} slug={postData.slug} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
