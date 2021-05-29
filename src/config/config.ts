import {from} from 'env-var'
import * as core from '@actions/core'

import {asGitHubRef, asRepoWithoutOwner} from '../utils'

const githubEvents = ['workflow_dispatch']

const env = from(process.env, {
  asRepoWithoutOwner,
  asGitHubRef
})

export class Config {
  public ci: boolean;
  public workspace: string;
  public repo:string;
  public owner: string;
  public ref: string;
  public sha: string;
  public apiUrl: string;
  public serverUrl: string;
  public event: string;
  public token: string;

  constructor() {
    this.ci = env.get('CI').default('false').asBool()
    this.workspace = env
      .get('GITHUB_WORKSPACE')
      .required(this.ci)
      .example('src')
      .asString()
    this.repo = env.get('GITHUB_REPOSITORY')
      .required()
      .asRepoWithoutOwner()
    this.owner = env
      .get('GITHUB_REPOSITORY_OWNER')
      .required()
      .example('github')
      .asString()
    this.ref = env.get('GITHUB_REF').required(this.ci).asGitHubRef();
    this.sha = env.get('GITHUB_SHA').required(this.ci).asString();
    this.apiUrl = env
      .get('GITHUB_API_URL')
      .default('https://api.github.com')
      .asString();
    this.serverUrl = env
      .get('GITHUB_SERVER_URL')
      .default('https://github.com')
      .asString();
    this.event = env.get('GITHUB_EVENT_NAME').required(this.ci).asEnum(githubEvents)
    this.token = env
      .get('GITHUB_TOKEN')
      .required(this.ci)
      .default(core.getInput('token'))
      .asString()
  }

  config = {
    'writerOpts': {},
    'options': {
      'preset': {
        'name': 'conventionalcommits',
        'header': '# Changelog',
        'issuePrefixes': ['#'],
        'issueUrlFormat': '{{host}}/{{owner}}/{{repository}}/issues/{{id}}',
        'compareUrlFormat': '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
        'userUrlFormat': '{{host}}/{{user}}',
        'types': [
          {'type': 'feat', 'hidden': false, 'section': 'Features'},
          {'type': 'feature', 'hidden': false, 'section': 'Features'},
          {'type': 'fix', 'hidden': false, 'section': 'Bug Fixes'},
          {'type': 'bug', 'hidden': false, 'section': 'Bug Fixes'},
          {'type': 'perf', 'hidden': false, 'section': 'Performance Improvements'},
          {'type': 'revert', 'hidden': false, 'section': 'Reverts'},
          {'type': 'docs', 'hidden': false, 'section': 'Documentation'},
          {'type': 'style', 'hidden': false, 'section': 'Styles'},
          {'type': 'chore', 'hidden': false, 'section': 'Chores'},
          {'type': 'node', 'hidden': false, 'section': 'Chores'},
          {'type': 'git', 'hidden': false, 'section': 'Chores'},
          {'type': 'refactor', 'hidden': false, 'section': 'Refactor'},
          {'type': 'ref', 'hidden': false, 'section': 'Refactor'},
          {'type': 'test', 'hidden': false, 'section': 'Tests'},
          {'type': 'build', 'hidden': false, 'section': 'Automation'},
          {'type': 'ci', 'hidden': false, 'section': 'Continuous Integration'},
          {'type': 'perf', 'hidden': false},
          {'type': '', 'hidden': false, 'section': 'Refactor'}
        ]
      }
    }
  }
}
