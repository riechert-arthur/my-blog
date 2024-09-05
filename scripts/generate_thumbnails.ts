const fs = require("fs").promises
const path = require("path")

interface Thumbnails {
  [key: string]: string
}

async function generateThumbnailConfig(): Promise<void> {

    const directoryPath: string = "./public/metadata"

    try {
      const files: string[] = await fs.readdir(directoryPath)

      const thumbnails: Thumbnails = files.reduce<Thumbnails>((acc, name) => {
        const slug: string = name.split('.')[0]
        acc[`${ slug }-hero`] = `url('/images/thumbnails/${ slug }_hero.jpg')`
        return acc
      }, {})

      const tailwindPath: string = "./tailwind.config.ts"
      const backupTailwindPath: string = "./tailwind.backup.config.ts"
      const configString: string = await fs.readFile(tailwindPath, "utf8")

      await fs.writeFile(backupTailwindPath, configString, "utf8")

      const lines: string[] = configString.split('\n')
      const imgStartIdx: number = lines.findIndex(line => line.includes("backgroundImage")) + 1
      Object.entries(thumbnails).forEach(([key, value]) => {
        for (let i = imgStartIdx; i < lines.length; ++i) {
          if (lines[i].includes(key)) {
            lines.splice(i, 1)
          }
        }
        lines.splice(imgStartIdx, 0, `\t\t\t\t"${ key }": "${ value }",`)
      })

      const newConfig: string = lines.join('\n')

      await fs.writeFile(tailwindPath, newConfig, "utf8")
  } catch (e) {
    console.error("Error generating thumbnail config: ", e)
  }

}

generateThumbnailConfig()
