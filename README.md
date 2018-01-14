# Drone Flight Planner

This is an application that allows its users to create and save flight plans, and browse them.

## Development

The project was developed using the Google Maps API, AngularJS 1.4 and Bootstrap 3. 

## Dependencies

By default, to run the project you don't need to install any dependencies. The application depends on external
resources (JS libraries and CSS stylesheets) that have been downloaded in the `external_resources` directory.

However, as an alternative option, you can also use `npm`:

In the directory `static`, please run `npm install`. Then uncomment the corresponding resources (ones in `node_modules`)
in the `index.html` and comment the ones to the external resources (ones in `external_resources` directory).

## Run

To run the project, in the directory `static` you can use the `lite-server` by running `npm run dev`,
or another server, e.g. `SimpleHTTPServer` by running `python -m SimpleHTTPServer` (for Python 2).