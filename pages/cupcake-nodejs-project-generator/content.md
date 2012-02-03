#####Have a cupcake with your express, coffee and coffeekup

I have been playing around with cupcake ( https://github.com/twilson63/cupcake ) today.  As with all software, this is still a work in progress, but seems to work beautifully for getting started with an express app.  I managed to put up a working demo of a chess game I was working on using this generator in a little under an hour.  

demo:  http://cupcake-demo.jit.su/

github src:  https://github.com/gradus/cupcake-demo


To get started:

npm install cupcake -g

cupcake [your project name]

(you will be prompted for the templating engine and database type) 

cd [your project name]

npm install .

node app.js

visit localhost:3000


If you open the project with your favorite text editor (hopefully, Vim),
you will see that the project is all set up as a skeleton for you.  The
addition of connect-assets was just recently added and you are now able
to use Stylus and Nib.  This makes it super simple to get started with an express app.  Happy hacking!  Thanks Tom.

![Cupcake](cupcake-nodejs-project-generator/cupcake.jpeg "Cupcake")

