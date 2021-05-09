'use strict'

const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
  'preMajor': true,
  "issuePrefixes": ["#"],
  "issueUrlFormat": "{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
  "compareUrlFormat": "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
  "userUrlFormat": "{{host}}/{{user}}",
  "types": [
    { "type": "feat", "section": "Features" },
    { "type": "feature", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "chore", "hidden": false, "section": "Chores" },
    { "type": "git", "hidden": false, "section": "Chores" },
    { "type": "ci", "hidden": false, "section": "Chores" },
    { "type": "docs", "hidden": false, "section": "Docs" },
    { "type": "style", "hidden": false },
    { "type": "refactor", "hidden": false, "section": "Refactor" },
    { "type": "", 'hidden': false, 'section': "Refactor" },
    { "type": "perf", "hidden": false },
    { "type": "test", "hidden": false, "section": "Test" }
  ]
})
