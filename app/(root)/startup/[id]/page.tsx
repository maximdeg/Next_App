import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import markdownit from "markdown-it";

export const experimental_ppr = true;
const md = markdownit();

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data } = await sanityFetch({
    query: STARTUP_BY_ID_QUERY,
    params: { id },
  });

  if (!data) return notFound();

  const parsedContent = md.render(data?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(data._createdAt)}</p>
        <h1 className="heading">{data.title}</h1>
        <p className="sub-heading !max-w-5xl">{data.description}</p>
      </section>

      <section className="section-container">
        <img src={data.image} alt="thumbnail" />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${data?.author._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={data.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              ></Image>
              <div>
                <p className="text-20-medium">{data.author.name}</p>
                <p className="text-15-medium !text-black-300">
                  @{data.author.username}
                </p>
              </div>
            </Link>

            <p className="category-teg">{data.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            ></article>
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
