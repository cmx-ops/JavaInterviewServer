1. db.js

```javascript
 "mongodb+srv://1064830687:caomingxing7520@cluster0.hfyyom0.mongodb.net/javaInterview"
```

连接库时，需要指定库名

2. mongoose去掉_id返回
```javascript
return columnArticleModel.find({}, {_id: 0});
```
