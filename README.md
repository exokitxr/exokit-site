# exokitxr.github.io

Hosted static Exokit site. See the [exokit-site repo](https://github.com/exokitxr/exokit-site). Automatically deployed by @exo-bot.

<h1> Deployment </h1>

```sh
git clone git@github.com:exokitxr/exokitxr.github.io.git
cd exokitxr.github.io

git clone git@github.com:exokitxr/exokit-site.git
npm install --prefix exokit-site
npm run deploy --prefix exokit-site

cp -r exokit-site/public/* ./
rm -rf exokit-site

git add .
git commit -m "rebuild site"
git push
```
