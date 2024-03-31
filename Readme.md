# Start guide
## step 1
#### Create folder
~~~bash
$ mkdir project-name
$ cd project-name
$ npm init -y
~~~
#### Install modules
~~~bash
$ npm intall express dotenv
$ npm install -D typescript ts-node @types/node @types/express
~~~
## step 2
#### Configure typescript
~~~bash
$ tsc --init # typescript is installed globally.
or
$ npx tsc --init
~~~

~~~bash
$ vi tsconfig.json
...
  "outDir":
...
~~~
## step 3
#### execute
~~~bash
$ npx ts-node src/index.ts
~~~

# Feature
## endpoint
* GET /user
* POST /user
* PUT /user/:id
