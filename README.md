# Exokit site

## Deploy

- For the main site, just `git push`
- For the docs:
```
pushd mkdocs-material
rm -Rf ../site site
mkdocs build
cp -R site ..
popd
```
