module.exports = {
    apps: [
        {
            name: "demo", // 启动项目名称，随便取，一般为项目名
            exec_mode: "cluster",
            instances: 1, // 进程数,默认为1，如果该配置文件需要管理多个项目，可根据项目的个数更改进程数
            port: "3003", // 端口，根据需要指定
            script: "./.output/server/index.mjs", // 启动入口，相对于 .output 目录的路径
            args: "start"
        }
    ]
}