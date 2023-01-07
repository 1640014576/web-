var myChart1 = echarts.init(document.getElementById('Econtainer-1'));
var myChart2 = echarts.init(document.getElementById('Econtainer-2'));
var myChart3 = echarts.init(document.getElementById('Econtainer-3'));
var myChart4 = echarts.init(document.getElementById('Econtainer-4'));

window.onload = function () {
    echart01();
    echart02();
    echart03();
    echart04();

    function echart01(){
        // 指定图表的配置项和数据
        var option1 = {
            color: ['orange'],
            xAxis: {
                type: 'value',  
                axisLabel: {  
                    show: true,  
                    interval: 'auto',  
                    formatter: '{value} %'  
                },  
                show: true
            },
            yAxis: {
                type:"category",
                data: ["二","一"]
            },
            series: [{
                type: 'bar',
                label:{
                    fotmatter:'{b}\n{c}%'
                },
                data: [
                    {value:85},
                    {value:15}
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
    }

    function echart02(){
        // 指定图表的配置项和数据
        var option2 = {
            series : [
                {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    roseType: 'angle',
                    data:[          // 数据数组，name 为数据项名称，value 为数据项值
                        {value:450, name:'选项一'},
                        {value:274, name:'选项二'},
                        {value:310, name:'选项三'},
                        {value:335, name:'选项四'},
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
    }

    function echart03(){
        // 指定图表的配置项和数据
        var option3 = {
            color: ['orange'],
            xAxis: {
                type: 'value',  
                axisLabel: {  
                    show: true,  
                    interval: 'auto',  
                    formatter: '{value} %'  
                },  
                show: true
            },
            yAxis: {
                type:"category",
                data: ["二","一"]
            },
            series: [{
                type: 'bar',
                label:{
                    fotmatter:'{b}\n{c}%'
                },
                data: [
                    {value:60},
                    {value:32}
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart3.setOption(option3);
    }

    function echart04(){
        // 指定图表的配置项和数据
        var option4 = {
            color: ['orange'],
            xAxis: {
                type: 'value',  
                axisLabel: {  
                    show: true,  
                    interval: 'auto',  
                    formatter: '{value} %'  
                },  
                show: true
            },
            yAxis: {
                type:"category",
                data: ["占比"]
            },
            series: [{
                type: 'bar',
                label:{
                    fotmatter:'{b}\n{c}%'
                },
                data: [
                    {value:100}
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart4.setOption(option4);
    }

}