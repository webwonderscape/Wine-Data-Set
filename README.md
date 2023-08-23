# React Data Analysis Application

This repository contains a React application that performs data analysis on JSON data related to alcohol, flavonoids, and gamma values. The application utilizes React components, context API, and various utility functions to calculate and display statistical measures for the provided data.

## Table of Contents

-`Introduction`
-`Setup`
-`Components`
-`Utility Functions`

## Introduction

The React Data Analysis Application aims to analyze data from a JSON file containing information about alcohol, flavonoids, and other attributes. The application calculates statistical measures such as mean, median, and mode for the provided data and displays them in tables.

## Setup

To set up and run the application, follow these steps:

1. Clone or download this repository to your local machine.
2. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3. Navigate to the project directory in your terminal.
4. Install the required dependencies by running:
  
   yarn install

5. Start the React application with:

   yarn start


6. Open your web browser and visit `http://localhost:3000` to see the application in action.

## Components

### `App.js`

The `App.js` file serves as the entry point of the application. It fetches data from a JSON file using the Fetch API and stores it in the component's state using the `useState` hook. The data is then passed down to the `UtilityCalculations` component through the context API.

### `UtilityCalculations.js`

The `UtilityCalculations` component is responsible for rendering statistical analysis tables. It uses the context API to access the data obtained from `App.js`. The data is grouped by alcohol values, and two tables (`FlavanoidsTable` and `GammaTable`) are rendered to display the calculated mean, median, and mode for flavonoids and gamma values.

### `FlavanoidsTable.js`

This component renders a table displaying statistical measures for flavonoid data. It calculates and displays the mean, median, and mode of flavonoids for different alcohol groups.

### `GammaTable.js`

Similar to `FlavanoidsTable`, this component renders a table displaying statistical measures for gamma values. It calculates and displays the mean, median, and mode of gamma values for different alcohol groups.

## Utility Functions

The application includes several utility functions used for data analysis:

- `groupByAlcohol(data)`: Groups the provided data by alcohol values.
- `calculateMean(data)`: Calculates the mean value of a data set.
- `calculateMedian(data)`: Calculates the median value of a data set.
- `calculateMode(data)`: Calculates the mode of a data set.
- `calculateGamma(data)`: Calculates gamma values based on specific attributes.

## Usage

1. Launch the application by following the setup instructions.
2. The application will display statistical analysis tables for flavonoids and gamma values based on the provided JSON data.
3. Explore the tables to see the calculated mean, median, and mode for different alcohol groups.

##  `FlavanoidsTable and GammaTable`

![Capture](https://github.com/webwonderscape/Wine-Data-Set/assets/141607240/87aaa66c-770c-4bcf-990b-3fa9e60b8e36)

