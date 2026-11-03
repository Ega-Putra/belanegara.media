import Image from "next/image";
import { OG_SIZE } from "@/lib/site";
import type { CoverImage } from "@/types/content";

export default function ArticleFigure({ cover }: { cover: CoverImage }) {
  return (
    <figure className="art-figure">
      <Image
        src={cover.src}
        alt={cover.alt}
        width={OG_SIZE.width}
        height={OG_SIZE.height}
        sizes="(max-width: 860px) 100vw, 720px"
        priority
      />
      <figcaption>
        Gambar: {cover.sourceUrl ? <a href={cover.sourceUrl}>{cover.credit}</a> : cover.credit}
        {cover.source && ` / ${cover.source}`}
        {cover.license && (
          <>
            ,{" "}
            {cover.licenseUrl ? (
              <a href={cover.licenseUrl} rel="license">
                {cover.license}
              </a>
            ) : (
              cover.license
            )}{" "}
            (dipotong)
          </>
        )}
      </figcaption>
    </figure>
  );
}
