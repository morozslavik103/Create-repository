{
    "kind": 2,
    "language": "github-issues",
    "value": "// list of repos we work in\n$repos=repo:microsoft/vscode repo:microsoft/vscode-remote-release repo:microsoft/vscode-js-debug repo:microsoft/vscode-pull-request-github repo:microsoft/vscode-github-issue-notebooks repo:microsoft/vscode-internalbacklog repo:microsoft/vscode-dev repo:microsoft/vscode-references-view repo:microsoft/vscode-anycode repo:microsoft/vscode-hexeditor repo:microsoft/vscode-extension-telemetry repo:microsoft/vscode-livepreview repo:microsoft/vscode-remotehub repo:microsoft/vscode-settings-sync-server repo:microsoft/vscode-remote-repositories-github repo:microsoft/monaco-editor\n\n// current milestone name\n$milestone=milestone:\"March 2022\""
    "value": "// list of repos we work in\r\n$repos=repo:microsoft/vscode repo:microsoft/vscode-remote-release repo:microsoft/vscode-js-debug repo:microsoft/vscode-pull-request-github repo:microsoft/vscode-github-issue-notebooks repo:microsoft/vscode-internalbacklog repo:microsoft/vscode-dev repo:microsoft/vscode-unpkg repo:microsoft/vscode-references-view repo:microsoft/vscode-anycode repo:microsoft/vscode-hexeditor repo:microsoft/vscode-extension-telemetry repo:microsoft/vscode-livepreview repo:microsoft/vscode-remotehub repo:microsoft/vscode-settings-sync-server repo:microsoft/vscode-remote-repositories-github repo:microsoft/monaco-editor repo:microsoft/vscode-vsce\r\n\r\n// current milestone name\r\n$milestone=milestone:\"March 2022\""
  },
  {
    "kind": 1,
@@ -113,5 +113,30 @@
    "kind": 2,
    "language": "github-issues",
    "value": "$repos assignee:@me is:open label:\"needs more info\""
  },
  {
    "kind": 1,
    "language": "markdown",
    "value": "### Pull Requests"
  },
  {
    "kind": 1,
    "language": "markdown",
    "value": "✅ Approved"
  },
  {
    "kind": 2,
    "language": "github-issues",
    "value": "$repos author:@me is:open is:pr review:approved"
  },
  {
    "kind": 1,
    "language": "markdown",
    "value": "⌛ Pending Approval"
  },
  {
    "kind": 2,
    "language": "github-issues",
    "value": "$repos author:@me is:open is:pr review:required"
  }
] 
