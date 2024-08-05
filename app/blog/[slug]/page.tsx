import { generateSanitizedBlogHTML } from "/lib/posts"
import Markdown from 'markdown-parser-react'

interface PageProps {
	params: {
		slug: string
	}
}

const page = async ({ params }: PageProps) => {
	
	const htmlContent = await generateSanitizedBlogHTML(params.slug)

	return (
		<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
	)
}

export default page
