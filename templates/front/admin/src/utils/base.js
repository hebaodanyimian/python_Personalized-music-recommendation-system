const base = {
    get() {
        return {
            url : "http://localhost:8080/django26tm7521/",
            name: "django26tm7521",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于python的个性化音乐推荐系统的设计与实现"
        } 
    }
}
export default base
