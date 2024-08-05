import fetchImages from "../lib/fetchImages";
import { ImagesResults } from "../lib/definitions";
import React from "react";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "../lib/gatBase64";

export default async function Gallery({
  topic,
}: {
  topic?: string | undefined;
}) {
  const url = !topic
  ?"https://api.pexels.com/v1/curated"
  :`https://api.pexels.com/v1/search?query=${topic}`
  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images) return <h1 className="m-4 text-2xl font-bold">no images</h1>;

  const photosWithBlur = await addBlurredDataUrls(images);
  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px] place-items-start">
      {photosWithBlur.map((img) => {
        return <ImageContainer key={img.id} photo={img} />;
      })}
    </section>
  );
}
