-set up eslint

-set up environment variables

-set up absolute imports instead of relative imports

- theme configurations -> applying theme

- router and navigation (using router-dom with <browserRouter>/<Routes>/<Route>) <--- probably change with nextjs

- create navbar component, utilise material ui <Box> and <Link>
in combination, with materiaul ui styling

- used CSS Grids to develop a flexible dashboard, used
styled components to extend Box to create call Boxes

- setting up redux tookit and configuration for the backend
api, utilises the createApi function to generate queries,
referenced at kpi/kpis/


- Set up back end installations: setting up express and adding necessary middleware components, installing them using "npm -i ..." and then using express' "app.use()"

- Setting up MongoDB Installation and using mongoose to create a connection between
the MongoDB and the node.js runtime environment. We utilised the express.js "app.listen()" to bind and listen to the connections on the specified host and port. In otherwords creating a ahttp server object, configuring it to received incoming TCP connections on that specified address.

- Then set up our first back end api, to complete a GET Request to return an object
from the mongoDB. We use mongoose to define the schema, and use express.Router() to
handle our api routing.

-part of the dashboard-ui implemented using the recharts library, we developed components that extended the Box components to develop effective UI. Developed a types folder to accomadate all the data types.
