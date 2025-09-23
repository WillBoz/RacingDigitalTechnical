<h2  align="center">Racing Digital Technical Assessment</h2>
 
<h3  align="center">Purpose of the App:</h3>
 
<h4 align="center"><i>To provide a UI and API to view racing results and create notes.</i><p>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/docs/readme-icons/angular.svg" alt="HTML" height="50"/>
  <p align="center"><i>Angular</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/tailwindcss.svg" alt="HTML" height="50"/>
  <p align="center"><i>Tailwind CSS</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/csharp.svg" alt="HTML" height="50"/>
  <p align="center"><i>C#</i></p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/dotnet.svg" alt="HTML" height="50"/>
  <p align="center"><i>.NET</i></p>
</div>

<h3 align="center">How The Application Works</h3>

- The application uses **Angular** with its component-based architecture to render the user interface.
- **Tailwind CSS** is used for styling, providing a lean way of managing styles for the components.
- **PrimeNG** is the UI library used to handle the grid and side panel componentry in the app.
- **NgRx** is used for state management to manage data flow between the store and Angular components.
- **.NET 8 Web API** serves as the backend, exposing endpoints and handling data that the Angular frontend consumes over HTTP.

<h3 align="center">How To Run The App</h3>

### ⚙️ Prerequisites

- **Node.js v20.19.0** – [Download](https://nodejs.org/en/download)
- **.NET 8.0** – [Download](https://dotnet.microsoft.com/en-us/download)
- **NPM** – [Install Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Visual Studio** – [Download](https://visualstudio.microsoft.com/)
- **Clone the repo**: [Racing Digital Technical](https://github.com/WillBoz/RacingDigitalTechnical)

### 🖥️ UI (Angular Frontend)

1. Go into the `RacingDigitalUI` folder.
2. Install dependencies via:

```bash
npm install
```

3. Run the application

```bash
ng serve
```

4. Open a browser to port **http://localhost:4200/**

### 🖥️ API (.NET Backend)

1. Go into the `RacingDigitalAPI` folder.
2. Use Visual Studio and open the **RacingDigitalAPI.sln** file.
3. Once loaded, select **https** as the run type.
4. Build and run the application.
