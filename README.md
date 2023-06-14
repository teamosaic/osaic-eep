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
- [Create a new Page](https://bukwild.slab.com/posts/create-a-new-page-qd6vzrsb)
- [Create a new Block](https://bukwild.slab.com/posts/create-a-new-block-a029b2vh)

## Notes

### Nightly production content reset

The `production` dataset gets reset from the contents of `backups/production.gz` every night by the [`.github/workflows/reset-dataset.yml`](.github/workflows/reset-dataset.yml) workflow.  This was done so that the demo always has a clean state for client-facing demos.  You can also manually trigger a reset from the Actions tab in GitHub.

To rebuild the backup, run `yarn sanity dataset export production backups/production.gz`
