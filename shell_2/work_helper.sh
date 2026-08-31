#!/bin/bash
# ============================================================================
# 文件名：work_helper.sh
# 描述：工作目录快速切换助手
# 功能：快速切换到 monorepo 中的应用目录，并可选执行 rush update
# 用法：w <应用名称> [-u|--update]
# 示例：
#   w tthp          # 切换到 tthp 应用目录
#   w tthp -u       # 切换到 tthp 应用目录并执行 rush update
#   w tthp --update # 同上
# ============================================================================

# ============================================================================
# 函数名：w
# 描述：切换到指定应用的工作目录
# 参数：
#   $1 - 应用名称（必需）
#   -u, --update - 可选标志，切换目录后执行 rush update
# 返回值：
#   0 - 成功
#   1 - 失败（参数错误、目录不存在或命令执行失败）
# ============================================================================
w() {
    # 初始化变量
    local app_name=""           # 应用名称
    local run_update=false      # 是否执行更新的标志

    # 解析命令行参数
    while [[ $# -gt 0 ]]; do
        case "$1" in
            -u|--update)
                # 设置更新标志
                run_update=true
                shift
                ;;
            -*)
                # 未知的选项参数
                red_echo "错误：未知选项 '$1'，用法：update_app <应用名称> [-u|--update]"
                return 1
                ;;
            *)
                # 处理应用名称参数
                if [ -z "$app_name" ]; then
                    app_name="$1"
                    shift
                else
                    red_echo "错误：只能指定一个应用名称"
                    return 1
                fi
                ;;
        esac
    done

    # 验证必需参数：应用名称
    if [ -z "$app_name" ]; then
        red_echo "错误：请提供应用名称作为参数，例如：tthp [-u]"
        return 1
    fi

    # 构建目标目录路径
    local target_dir="$HOME/workplace/page-maker-monorepo/apps/$app_name"

    # 验证目标目录是否存在
    if [ ! -d "$target_dir" ]; then
        red_echo "错误：目录不存在：$target_dir"
        return 1
    fi

    # 切换到目标目录
    cd "$target_dir" || {
        red_echo "错误：无法切换到目录 $target_dir"
        return 1
    }

    # 根据 -u/--update 选项决定是否执行 rush update
    if [ "$run_update" = true ]; then
        echo "正在执行 rush update（位于 $target_dir）..."
        rush update
        # 检查 rush update 命令是否执行成功
        if [ $? -ne 0 ]; then
            red_echo "错误：rush update 执行失败"
            return 1
        fi
        echo "✅ rush update 执行成功"
    else
        echo "已切换到目录：$target_dir（未执行更新，如需更新请添加 -u 选项）"
    fi
}
