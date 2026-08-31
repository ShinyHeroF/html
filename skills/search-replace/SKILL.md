在 apps/order/src 目录下，用 useMemoizedFn 方法替换 useRealtimeCallback 方法，useMemoizedFn 是从 ahooks 中导入的，请一定要注意不要重复声明 ahooks 的导入。

注意事项：
1. 请全面搜索整个 apps/order/src 目录，包括所有子目录（hooks、views、components 等）
2. 修改完成后，请验证是否还有遗漏的 useRealtimeCallback
3. 确保所有使用该回调的文件都被找到并修改