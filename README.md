This is `eslint` config (`standard`, `unicorn`, `sonarjs`, [import-x](https://github.com/un-ts/eslint-plugin-import-x/?tab=readme-ov-file#eslint-plugin-import-x), `markdown`, `yaml`) without `prettier`

### Install

```shell
npm i github:cakkypamucm/eslint-config --save-dev
```

### Usage notes

Add [resolvers](https://github.com/import-js/eslint-plugin-import/wiki/Resolvers) to correct working `import-x/no-unresolved` rule.  
 For `webpack`-based projects e.g.:

1.

```shell
npm i eslint-import-resolver-webpack --save-dev
```

2.

```json
{
    "settings": {
        "import-x/resolver": {
            "node": true,
            "webpack": true
        }
    }
}
```
