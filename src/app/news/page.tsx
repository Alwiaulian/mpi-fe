"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";
import ArticleCard from "@/components/layouts/news-card";
import { NEWS } from "@/data/news_props";
import MiddleHero from "@/components/hero/middle_hero";

function NewsPage() {
  return (
    <section>
      <MiddleHero
        title="News"
        placeholder="bg-[#3B3B7D80]"
        image="/images/about/hero.webp"
      />
      <div className="w-full container mx-auto pb-24">
        <section className="container mx-auto px-8 py-20">
          <Typography placeholder="title" variant="h2" color="blue-gray">
            Latest News
          </Typography>
          <Typography
            placeholder="description"
            variant="lead"
            className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
          >
            Check out what&apos;s new in the web development and tech worls! Do
            not forget to subscribe to our blog and we will notify you with the
            latest news.
          </Typography>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {NEWS.map((props, idx) => (
              <ArticleCard key={idx} {...props} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default NewsPage;
