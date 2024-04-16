"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import ArticleCard from "@/components/layouts/news-card";
import { ArrowDownIcon, ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import { NEWS } from "@/data/news_props";
import { useRouter } from "next/navigation";

export function NewsLayout() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push("/news");
  };

  return (
    <section className="container mx-auto px-8 py-20">
      <Typography placeholder="title" variant="h2" color="blue-gray">
        Latest News
      </Typography>
      <Typography
        placeholder="description"
        variant="lead"
        className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
      >
        Check out what&apos;s new in the web development and tech worls! Do not
        forget to subscribe to our blog and we will notify you with the latest
        news.
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {NEWS.map((props, idx) => (
          <ArticleCard key={idx} {...props} />
        ))}
      </div>
      <Button
        placeholder="view more"
        variant="text"
        size="lg"
        color="gray"
        onClick={handleViewMore}
        className="flex mx-auto items-center gap-2 mt-12"
      >
        <ArrowDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VIEW MORE
      </Button>
    </section>
  );
}
export default NewsLayout;
