# Notion API × Next.js

Now that NotionAPI has been released, I've created a blog site using Next.js!

## Configuration

### ESLint

[.eslintrc.json](./.eslintrc.json)

### Prettier

[.prettierrc.json](./.prettierrc.json)

### TypeScript

[tsconfig.json](./tsconfig.json)

## Project Structure

```
notion-nextjs-blog
├─ .husky
├─ public
├─ src
│  ├─ components
│  │  ├─ atoms
│  │  ├─ molecules
│  │  ├─ organisms
│  │  └─ templates
│  ├─ context
│  ├─ lib
│  ├─ models
│  ├─ pages
│  ├─ styles
│  └─ util
├─ .babelrc
├─ .eslintrc.json
├─ .node-version
├─ .prettierrc.json
├─ lint-staged.config.js
├─ next-env.d.ts
├─ next-sitemap.js
├─ next.config.js
├─ tsconfig.json
├─ vercel-ignore-build-step.sh
└─ yarn.lock

```

## Get Starting

1. https://developers.notion.com/docs#step-1-create-an-integration
   ```dotenv
   NOTION_KEY="Notsion API Internal Integration Token"
   ```
2. https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration
   ```dotoenv
   NOTION_DATABASE_ID=""
   ```
3. Setting Page Properties<br><img width="450" alt="Setting Page Properties" src="https://user-images.githubusercontent.com/32505502/142798498-3066607c-d79c-43fe-a0f0-4cd76be30151.png">

## Deployment

[Vercel](https://vercel.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anyushu/notion-nextjs-blog)

## License

[MIT Licence](https://choosealicense.com/licenses/mit/)
