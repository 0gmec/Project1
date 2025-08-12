# Frontend Mentor - IP address tracker
## Project1

This is a project to create the challenge frontend IP tracker challenge as best as possibly by fetching IP address information such as location, timezone, and ISP using the IP Geolocation API.

Its suppose to display your current IP address and location on page load.  Search for any IP address or domain to get detailed info. Have an interactive map showing the IP location. Have a layout for desktop and mobile.

### Netlify
ipat-project.netlify.app

## Refelction 
Working on the IP Address Tracker was challenging.  I found it hard to get the data from the IPify API to display properly on the page. (still not displaying) Handling asynchronous fetch requests and making sure the data updated the right HTML elements took some trial and error. I also struggled a bit with how to dynamically update the map using LeafletJS whenever a new IP was searched. 
With styling I didn't use Tailwind or Bootstrap, at first I wanted to use Tailwind CSS but it became too time consuming so I stuck to basic CSS. The information display was another challenge. The data items were stacking vertically, not side by side like the design. I had to dig into CSS Flexbox to fix the layout and make it responsive across screen sizes. It taught me flexibility with different layouts.


## Resources
- https://www.youtube.com/watch?v=VaDUGPMjzOM
