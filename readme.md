# express

처음에 실행 할 때

작업할 해당 폴더에 접근 후 
'''
# npm init // 엔터 연속 클릭 단 프로젝트 이름은 express 로 하지말것.
''' 

그 후 생성된 Packge.jsn 파일에 "scripts" 부분에 start 추가
``` javascript
{
  "name": "ju-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon app" // 여기
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "express": "^4.17.2",
    "express-session": "^1.17.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```
```
# npm i express

# npm i -D nodemon
```
그 후 app.js 파일을 생성 후 작업
