db.students.find()

db.students.insert([{name:"老王",age:38},{name:"老绿",age:48}])

db.students.find({})

//查询name值为小王的文档对象
db.students.find({name:"小王"})

//查询name值为小王,age值为21的文档对象
db.students.find({name:"小王",age:21})

//查询age为21和23的文档对象
db.students.find({age:{$in:[21,23]}})
//模拟in
db.students.find({$or:[{age:21},{age:23}]})

//查询age不为21和23的文档对象
db.students.find({age:{$nin:[21,23]}})

//查询name为小王或者age为21的文档对象
db.students.find({$or:[{name:"小王"},{age:21}]})

//查询name为小红同时age为21的文档对象
db.students.find({$and:[{name:"小红"},{age:21}]})
db.students.find({name:"小红",age:21})

//查询age小于38的文档对象
db.students.find({age:{$lt:38}})

//查询age->小于等于->38的文档对象
db.students.find({age:{$lte:38}})


//查询age-1之后小于37的人
db.students.find({$where:function(){return this.age-1<37}})

//查询name中有"小"字的文档对象,^以什么开头,$以什么结尾
db.students.insert({name:"大小",age:33})
db.students.find({name:/小$/})
