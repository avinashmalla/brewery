### Search Breweries by cities

This app was created as an assignment for React. It uses the [**Breweries** API](https://api.openbrewerydb.org/breweries) from [Open Brewerey DB](https://www.openbrewerydb.org/). The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

The app has three main components
- SearchBrewers: This is the front page. Lists all the breweries with a short info of each in cards. The cards also have a *View Details* button to show more details. There are 3 filtering/options:
  - A search bar to filter breweries by names. 
  - Checkbox to select breweries by type.
  - Dropdown menu of cities.
- BreweryCard: Prepares the cards to be shown on the front page.
- BreweryDetails: Shows more details of each brewery. 

It also has 2 other components
- NavBar: Navigational links
- DataTable: This displays the dataset in a table with pagination and options for column and row filtering. It utilizes DataGrid and GridToolbar from *'@mui/x-data-grid'*

### Live on [Netlify](https://avinashmalla-brewery.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3ff793a5-c330-4b4f-bebe-47b2cb82756e/deploy-status)](https://app.netlify.com/sites/celebrated-crepe-1d158d/deploys)
