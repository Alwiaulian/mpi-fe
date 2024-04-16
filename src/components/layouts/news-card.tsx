import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsCardProps } from "@/data/news_props";

export function NewsCard({ img, title, desc }: NewsCardProps) {
  const [onHover, setOnHover] = useState(false);
  const [path, setPath] = useState(title);

  const hover = () => {
    setOnHover(!onHover);
  };

  useEffect(() => {
    var _title = title.split(": ");

    if (_title.length > 1) {
      setPath(_title[1]);
    } else {
      setPath(_title[0]);
    }
  }, [title]);

  return (
    <Link href={`news/${path.toLowerCase().replaceAll(" ", "-")}`}>
      <Card
        placeholder="card news"
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
        color="transparent"
        onMouseEnter={hover}
        onMouseLeave={hover}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="bg"
          priority
          className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 overflow-hidden ${
            onHover && "scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody
          placeholder="body card news"
          className="relative flex flex-col justify-end"
        >
          <Typography placeholder="title news" variant="h4" color="white">
            {title}
          </Typography>
          <div
            className=" text-white my-2 text-md line-clamp-3"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </CardBody>
      </Card>
    </Link>
  );
}

export default NewsCard;
