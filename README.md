# Exokit site

## Deploy

- For the main site, just `git push`
- For the docs:
```
pushd mkdocs-material
rm -Rf ../docs site
mkdocs build
cp -R site ../docs
popd
```
