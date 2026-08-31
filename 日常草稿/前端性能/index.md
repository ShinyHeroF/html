## CSS Overview

##
- inp 不上报
```js
fe_fcp
fe_lcp
fe_ttfb
fe_cls
fe_navigation_type
main_js_fetch_start
main_js_duration
isee_js_fetch_start
isee_js_duration
isee_launch_js_fetch_start
isee_launch_js_duration
xman_js_fetch_start
xman_js_duration
first_osp_img_fetch_start
first_osp_img_duration
//first_osp_img_show
```

## DOM event
### DOMContentLoaded
当 HTML 文档完全解析，且所有延迟脚本
[domContentLoadedEventStart](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart)
```js
<script defer src="…"> 和 <script type="module">
```
下载和执行完毕后，会触发 DOMContentLoaded 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。

DOMContentLoaded 不会等待样式表加载，但延迟脚本会等待样式表，而且 DOMContentLoaded 事件排在延迟脚本之后。此外，非延迟或异步的脚本（如 ```<script>```）将等待已解析的样式表加载。

### load
[loadEventStart](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart)
load 事件在**整个页面及所有依赖资源**如样式表和图片都已完成加载时触发。
它与 DOMContentLoaded 不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。

> document.readyState === complete 时，表示文档和所有子资源已完成加载。表示 load 状态的事件即将被触发