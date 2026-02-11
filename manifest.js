// manifest.js - 扩展元数据

export default {
    name: "Phone Notify",
    displayName: "手机通知扩展",
    description: "让 AI 主动推送通知到手机 Termux，支持关键词触发",
    version: "1.0.0",
    author: "兄弟定制",
    license: "MIT",
    homepage: "https://github.com/cxsj6666/-",
    entrypoint: "phone-notify.js",  // 指向你的主文件
    tags: ["notification", "mobile", "utility"],
    minAppVersion: "1.0.0",
    // 可选：依赖（如果有）
    dependencies: [],
};
