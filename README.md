# Vue web app
1. Data: https://api.myjson.com/bins/17fpo0

2. create a new Vue project: vue create bridge-vue
3. to run web server: npm run server
4. project layout:

/bridge-vue

    /public

        favicon.ico      <-- our project's icon

        index.html       <-- main html file

    /src

        assets/          <-- any static assets we need (e.g., images)

        components/      <-- our custom Vue components go here

        App.vue          <-- our application's main component

        main.js          <-- our project's entry point (main JavaScript file)

5. bridges.js---load bridge data from REST API with fetch()

   npm install --save he

6. build components:

   BridegeMenu.vue---entire menu

   MenuItem.vue--single item in menu

7. bridge-info container:

   BridgeInfo.vue---show location & info

8. map: using Leaflet js library, npm install --save leaflet

   To use Leaflet:

   include the Leaflet CSS file

   include the Leaflet JS file

   create an element in your page to hold the map

   write some code using the Leaflet API to draw a map

   simple-map.js ---create class for users to draw map

   LeafletMap.vue
