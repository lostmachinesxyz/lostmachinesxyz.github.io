import fs from 'fs'
import path from 'path'

export function getAllPages(nested) {
  const excluded = ['_app.js', 'all.js', 'index.js', 'template.js', 'ex']
  let dir = 'pages'
  if (nested) dir = path.join(dir, nested)
  const prefix = nested ? `/${nested}` : ''

  const pages = fs.readdirSync(dir).flatMap(f => {
    if (excluded.includes(f)) return []

    const lstat = fs.lstatSync(path.join(dir, f))

    const name = f.replace(/\.js$/, '')
    const title = name.replaceAll('-', ' ')
    const mtime = lstat.mtime.getTime() // ms

    return [
      {
        key: name,
        title,
        mtime,
        href: `${prefix}/${name}`,
      },
    ]
  })

  return pages.sort((a, b) => b.mtime - a.mtime)
}
