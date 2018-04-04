const express = require('express');
const router = express.Router();
const fs = require('fs');
const marked = require('marked');
const markdown = require('markdown').markdown;

router.get("/",function (req, res, next) {
    fs.readFile('public/doc/resume.md', function(err, data){
        if(err){
            console.log("文件不存在！");
            res.send("文件不存在！");
        }else{
            console.log(data);
            var htmlStr = marked(data.toString());
            // res.send(html);
            // htmlStr = marked(data.toString());
            // htmlStr = markdown.toHTML(data);
            // console.log(htmlStr)
            res.render('resume', {resumeContent: htmlStr});
        }
    });
});

module.exports = router;
