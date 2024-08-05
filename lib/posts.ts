import path from "path"
import { promises as fs } from "fs"
import { Marked, Renderer } from "@ts-stack/markdown"

export async function getRawBlogContents(slug: string): Promise<string> {
	
	const filePath: string = path.join(process.cwd(), "public", "posts", `${slug}.md`)

	try {
		const raw = await fs.readFile(filePath, "utf-8")
		return raw
	} catch (error) {
		console.error("Error while reading raw blog content: ", error)
		return null
	}
}

export async function generateSanitizedBlogHTML(slug: string): Promise<string> {

	const rawMarkdown: string = await getRawBlogContents(slug)		

  try {
    Marked.setOptions ({
      renderer: new Renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })

    const sanitizedHTML: string =  Marked.parse(rawMarkdown)

    return sanitizedHTML

  } catch(e: Error) {
   
    console.error("Error while parsing post markdown: ", e)
    return null

  }
}
