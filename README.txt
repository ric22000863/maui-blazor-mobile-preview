MAUI Blazor Hybrid — static mobile browser preview

Open index.html in a browser, or serve this folder with any static HTTP server.
For a real phone on the same Wi-Fi as your computer:
  1. Open a terminal in this folder.
  2. Run: python -m http.server 8000 --bind 0.0.0.0
  3. Find your computer's local IP address.
  4. On the phone visit: http://YOUR-COMPUTER-IP:8000

No .NET, build step, or internet connection is required.
The Weather 2 tab is a separate tab showing the same Weather view: the original MAUI project points both tabs to /weather.
