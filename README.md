# Next.js Sanity Demo

## Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev
```

- [http://localhost:3000](http://localhost:3000) - The project
- [http://localhost:3000/studio](http://localhost:3000/studio) - The CMS

## Docs

- [Start a new Project](https://bukwild.slab.com/posts/start-a-new-project-3tyijzrj)
- [Create a new Block](https://bukwild.slab.com/posts/create-a-new-block-a029b2vh)

## Notes

### Nightly production content reset

The `production` dataset gets reset from the contents of `backups/production.gz` every night by the [`.github/workflows/reset-dataset.yml`](.github/workflows/reset-dataset.yml) workflow.  This was done so that the demo always has a clean state for client-facing demos.  You can also manually trigger a reset from the Actions tab in GitHub.

To rebuild the backup, run `yarn sanity dataset export production backups/production.gz`

### Important files and folders

| File(s)                                 | Description                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| `sanity.config.ts`                      | Config file for Sanity Studio                                                         |
| `sanity.cli.ts`                         | Config file for Sanity CLI                                                            |
| `/pages/index.tsx`                      | Landing page for `/`.                                                                 |
| `/pages/studio/[[...index]].tsx`        | Where Sanity Studio is mounted                                                        |
| `/pages/api/preview.ts`                 | Serverless route for triggering Preview mode                                          |
| `/sanity/schemas.ts`                    | Where Sanity Studio gets its content types from                                       |
| `/sanity/env.ts`                        | Configuration for the Sanity project and dataset                                      |
| `/sanity/schemas.ts`                    | Where Sanity Studio gets its content types from                                       |
| `/sanity/lib/client.ts`                 | Sanity client configured based on `env.ts`                                            |
| `/sanity/lib/image.ts`                  | Sanity image builder - unused in this template, but is needed to render Sanity images |
| `/sanity/plugins/IFramePreviewView.tsx` | See [adding studio preview](docs/studio-preview.md)                                   |
| `tailwind.config.js`                    | Tailwind config. |

