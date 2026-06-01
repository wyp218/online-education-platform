const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot6056cc19/",
            name: "springboot6056cc19",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6056cc19/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Spring Boot的中小学教育平台的设计与实现"
        } 
    }
}
export default base
