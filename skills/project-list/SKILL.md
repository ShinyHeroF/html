---
name: project-list
description: 基于合并的 PR 生成更新日志，建议版本号并提供 gh 发布命令
license: MIT
compatibility: opencode
metadata:
  audience: maintainers
  workflow: github
---

## 工作流程
1. 读取 references/release-policy.md
2. 总结上次 tag 以来的合并变更
3. 在改动文件前先提议版本号
4. 用户批准版本后，运行 scripts/changelog.ts