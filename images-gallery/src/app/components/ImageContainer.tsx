import React from "react";
import { Photo } from "../lib/definitions";
import Image from "next/image";
import Link from "next/link";
export default function ImageContainer({ photo }: { photo: Photo }) {
  const widthHeightRation = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRation);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <div
      className="w-[250px] justify-self-center "
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group ">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className=" group-hover:opacity-75"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            sizes="250px"
            />
        </div>
      </Link>
    </div>
  );
}
