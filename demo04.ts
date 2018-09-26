function searchXiaoJieJie3(...xuqiu:string[]):string{
    
    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小哥哥'
    return yy

}

var result:string  =  searchXiaoJieJie3('29岁','大长腿','有担当','有智慧')
console.log(result)
