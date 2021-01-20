const data = [

    {
        id :1,
        name : "rich dad and poor",
        price : "120 RS" , 
        img :"data:image/jpeg;base64,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" ,
    }, 
    {
        id :2,
        name : "Emotionally Intelligent",
        price : "130 RS" , 
        img : "https://image.ebooks.com/previews/000/000121/000121701/000121701-hq-168-80.jpg",
    },



];




export default data;