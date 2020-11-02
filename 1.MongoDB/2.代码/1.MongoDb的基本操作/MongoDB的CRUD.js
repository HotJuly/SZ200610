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

//查询name为小明的文档对象,并返回他的name值,不返回age
db.students.find({name:"小明"},{name:1,_id:0})

db.students.find()

//更新需要先查找,再修改
//将name为小明的文档对象,他的age更新为24
db.students.updateOne({name:"小明"},{$set:{age:24}})

db.students.insert({name:"老王八",age:32})

//将name为老王的文档对象,他们的age更新为31岁
db.students.updateMany({name:"老王"},{$set:{age:31}})

//将所有人的岁数都增加1岁
db.students.updateMany({},{$inc:{age:1}})

//将所有人的name属性名,更新为studentName
db.students.updateMany({},{$rename:{"name":"studentName"}})

db.students.update({name:/王八/},{$set:{age:42}},{upsert:true,multi:true})

db.students.remove({name:/王八/})

//软删除
db.students.updateMany({studentName:"老王"},{$set:{isdelete:true}})

db.students.updateMany({},{$set:{isdelete:false}})

db.students.find({isdelete:false})
