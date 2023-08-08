import { Suspense } from "react";
import { Post } from "./components/posts";


interface TitleAndContentProps {
  rendered: string
}

interface CustomSeoFields {
  title_seo: string
  description_seo: string
}

interface PageProps {
  title: TitleAndContentProps
  content: TitleAndContentProps
  custom_seo_fields: CustomSeoFields
}

export default async function Home() {
  const response = await fetch('https://mvp.climatempo.com.br/wp-json/wp/v2/pages/422232')
  const page: PageProps = await response.json()

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          My title
        </h1>
        <Post.Root>
          <Post.Btn title={page.title.rendered} />
          <Post.Img>{page.custom_seo_fields.title_seo}</Post.Img>
          <Post.Img>{page.custom_seo_fields.description_seo}</Post.Img>
          <Post.ShortDescription content={page.content.rendered} />
          <Post.Icon />
          {/* <Post.SharedButton /> */}
        </Post.Root>
      </div>
    </>
  );
}