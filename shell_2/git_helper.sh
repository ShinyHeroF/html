# 在 ~/.bashrc 或 ~/.zshrc 中添加
gp() {
    local force_flag=""

    # 解析参数
    while [[ $# -gt 0 ]]; do
        case "$1" in
            -f|--force)
                force_flag="--force"
                shift
                ;;
            *)
                red_echo "错误：未知选项 '$1'，用法：gp [-f|--force]"
                return 1
                ;;
        esac
    done

    # 检查当前目录是否是 Git 仓库
    if ! git rev-parse --is-inside-work-tree &>/dev/null; then
        red_echo "错误：当前目录不是一个 Git 仓库"
        return 1
    fi

    # 获取当前分支名
    local branch
    branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
    if [ -z "$branch" ] || [ "$branch" = "HEAD" ]; then
        red_echo "错误：无法获取当前分支名称（可能处于 detached HEAD 状态）"
        return 1
    fi

    # 执行推送
    if [ -n "$force_flag" ]; then
        echo "正在强制推送到 origin/$branch ..."
    else
        echo "正在推送到 origin/$branch ..."
    fi
    git push $force_flag origin "$branch"

    # 检查推送结果
    if [ $? -ne 0 ]; then
        red_echo "错误：推送失败，请检查网络或权限"
        return 1
    fi
}