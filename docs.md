# Extra documentation

## Dependencies

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog)
- [conventional-recommended-bump](https://www.npmjs.com/package/conventional-recommended-bump)
- [config-conventional npm cli](https://www.npmjs.com/package/@commitlint/config-conventional)
- [config-conventional cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

- [conventional changelog docs](https://nicedoc.io/conventional-changelog/standard-version#user-content-configuration)
- [conventional changelog schema](https://github.com/conventional-changelog/conventional-changelog-config-spec)

How to use CLI
```bash

conventional-changelog -n config.js -r 0
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
conventional-changelog -i CHANGELOG.md -u -r 0 -n <config>
conventional-changelog -p conventionalcommits -n ./config1.json -c ./context.json -r 0
```
