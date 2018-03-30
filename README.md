# Hipster's Future

A prototype for an application to assist a surgeon in hip replacement surgery.

View the completed prototype at [hipsters_future.space](http://hipsters_future.space)


## The Tech

I have used React.js for the components and views that make up this application. I recently heard about a tool called [React Velocity](http://reactvelocity.com/) and used it for the first time on this project to generate the boilerplate for all the components. It saved a lot of typing and I like where they are going with this tool.  I used [create-react-app](https://github.com/facebook/create-react-app) for all of the build configuration, which probably saved me two days of work on this project.

For the component dragging I used a module called [react-draggable](https://www.npmjs.com/package/react-draggable#controlled-vs-uncontrolled). With more time, I would research another module for this task, as it wasn't perfect. Still, it was better than React's default dragging events.

All other code is roll-your-own javascript.

I chose to have a little bit of CSS, but most styling is directlty in the components. This gets around scoping issues and for this application worked well.

## Limitations

* The dragging is not perfect, especially when zoomed-in. 
* Safari has some bugs with using the *vh* and *vw* units which I did not have time to work around.
* I would have spent more time on the design and use of colors if I had a week rather than two days.
* There is very little error checking.
* No unit tests.

## Running this yourself

* Clone the project
* `cd hipsters_future/hipsters_future`
* Run `npm run start`
* Browse to `localhost:3000` unless that happens automagically for you
* OR, just browse to [hipsters_future.space](http://hipsters_future.space)

* Here is a [sample image](https://raw.githubusercontent.com/brendangibson/hipsters_future/f23e94f78ca8762da25fe3b577609c4b3558c310/hipxray.jpg) that you can use for testing if you don't have access to your own imagery.

