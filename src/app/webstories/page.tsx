import { loadWebstories } from "@/api/load-webstories";

export default async function WebStories() {

  function ablihbunuj(content: string) {
    let cleanContent = ""

    // remove all the line breaks

    cleanContent = content.replace(/\r?\n|\r/gs, "")

    // remove all the paragraphs wordpress might add

    cleanContent = cleanContent.replace(/<p>/gs, "")
    cleanContent = cleanContent.replace(/<\/p>/gs, "")

    return cleanContent
  }

  const response = await loadWebstories()
  const jbjjbk = ablihbunuj(response?.webStory?.content)
  return (
    <>
      <h1>evgwegwe</h1>
      <div
        dangerouslySetInnerHTML={{ __html: jbjjbk }}
      />
    </>
    // <div className="w-full flex justify-center mt-8">
    //   <div className="w-96">
    //     <h1>Meu Web Story</h1>
    //     <iframe
    //       src="https://adolphocavalcanti.com.br/web-stories/my-story/"
    //       title="Web Story"
    //       width="100%"
    //       height="600"
    //     />
    //   </div>
    // </div>
  );
}