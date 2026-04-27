# Local Workflow

This Quartz site publishes selected markdown content from the parent Obsidian vault.

## Refresh published content

From `quartz-site/`:

```bash
./scripts/sync-content.sh
node quartz/bootstrap-cli.mjs build
```

The sync step copies:

- `../index.md`
- `../log.md`
- `../wiki/**/*.md`
- `../Clippings/**/*.md`

into `content/`.

## GitHub publishing

- `content/` is committed to the repository.
- The GitHub Pages workflow builds directly from committed `content/`.
- Before pushing updates, run the sync script locally so the repo snapshot matches the current vault.
