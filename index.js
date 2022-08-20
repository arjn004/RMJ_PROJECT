

fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json').then((data)=>{
    //console.log(data);
    data = data.json();
    return data
}).then((completedata)=>{
    //console.log(completedata[2].title);
    //document.getElementById('root').innerHTML = completedata[2].title;
    let data1 = "";
    completedata.map((values)=>{
        data1+='<div class = "title">{data.title}</div><div class = "platform">${values.platform}</div><div class = "score">${values.score}</div><div class = "genre">${values.genre}</div><div class = "edit_ch">${values.editor_choice}</div>';
    });
    document.getElementById("card").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})