
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, DateField, isFilled } from "@prismicio/client";


export default  function ContentBody({page} : {
    page: Content.ProjectsDocument | Content.ExperiencesDocument | Content.MusicDocument
}) {
  function formatDate(date: DateField) {
    if (isFilled.date(date)) {
        const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
    }
    return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date))
  }
}   

const formattedDate = formatDate(page.data.date)

  return (
    <Bounded as = "article">
        <div className="rounded-2xl border-2 border-pallets-800 bg-pallets-900 px-4  py-10 md:px-8 md:py-20">
            <Heading as = "h1">{page.data.title}</Heading>
            <div className = "flex gap-4 text-pallets-400 text-xl font-bold">
                {page.tags.map((tag)=>(
                    <span key = {tag}>{tag}</span>
                ))}
            </div>
            <p className="mt-8 border-b border-pallets-600 text-xl font-medium text-pallets-300">
                {formattedDate}
            </p>
            <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-10">
            <SliceZone slices={page.data.slices} components={components} />
            </div>
        </div>
    </Bounded>
  );
}
