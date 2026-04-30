import { Typography } from "@mui/material";
import Layout from "./components/Layout";
import Map from "./components/Map";
import AsideIndex from "./components/AsideIndex";
import {
  FranchiseCinemasList,
  NearbyCinemasList,
} from "./components/CinemaList";
import { Switch, Route } from "react-router-dom";
import Provider from "./components/Provider";
import loadable from "@loadable/component";

const NotFound = () => (
  <Typography variant="h6">404, Page Not Found!</Typography>
);

const CinemaMarkers = loadable(() => import("./components/CinemaMarkers"));
const NearbyCinemaMarkers = loadable(() =>
  import("./components/NearbyCinemaMarkers")
);

const App = () => (
  <Provider>
    <Layout>
      {/* Map panel */}
      <Grid item xs={12} md={8} sx={{ minHeight: 400 }}>
        <Map>
          <Switch>
            <Route exact path="/" component={CinemaMarkers} />
            <Route path="/nearby" component={NearbyCinemaMarkers} />
            <Route
              path="/:franchiseId/:countryCode"
              component={CinemaMarkers}
            />
            <Route path="*" component={() => null} />
          </Switch>
        </Map>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 1 }}>
          <Switch>
            <Route exact path="/" component={AsideIndex} />
            <Route path="/nearby" component={NearbyCinemasList} />
            <Route
              path="/:franchiseId/:countryCode"
              component={FranchiseCinemasList}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </Paper>
      </Grid>
    </Layout>
  </Provider>
);

export default App;
