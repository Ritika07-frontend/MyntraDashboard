
## How to Structure Components

### 1. Master/Atom Component
Master components are the **atom components** that combines together to build **Molecular Components**. This is how i have maintain the folder Structure :
```
- auth
- dashboard
- Core
	|--- layout
	|--- components
			|--- TestComponent		// Atom component
					|--- stories		// Stories for Atom Component
					|		|--- TestComponent.stories.tsx
					|		|...
					|		
					|--- styled		// Styled component for Atom Component
					|		|--- TestComponent.styled.tsx
					|
					|--- tests		// Tests for atom component
					|		|--- TestComponent.test.ts
					|
					|--- index.ts		// Component's logic

```  

### 2. Molecular Component
Molecular components consists of **atom components**. It can have child components and containers corresponding to each component. This is how i have maintain the folder Structure :
```
- auth
- dashboard
- Core
	|--- layout
			|--- SideNav		// Atom component
					|--- containers // container components are molecular components that uses atoms/molecular components from './components' folder
							|--- Logo
							|		|--- index.styled.tsx
							|		|--- index.tsx
							|--- Menu
							|		|--- index.styled.tsx
							|		|--- index.tsx
							|--- Footer
							|		|--- index.styled.tsx
							|		|--- index.tsx
					|--- components // components are atoms/molecular components that container uses.
							|--- SomeCustomButton
									|--- index.styled.tsx
									|--- index.tsx
							|--- SomeCustomInput
									|--- index.styled.tsx
									|--- index.tsx
					|--- stories		// Stories for Atom Component
					|		|--- TestComponent.stories.tsx
					|		|...
					|		
					|--- styled		// Styled component for Atom Component
					|		|--- TestComponent.styled.tsx
					|
					|--- tests		// Tests for atom component
					|		|--- TestComponent.test.ts
					|
					|--- index.ts		// Component's logic

```

## Folder Structure Terminologies

### Specifics

1.  **js/index.tsx** - `ReactDOM.render` is getting called to mount the react app. Also, great place to configure anything that needs to be done before react app is mounted.
2.  **js/components** - Contains all the ***root level*** components, example `auth`, `dashboard`, `core`, `App.tsx(main)` etc.
3. **js/components/App.tsx** - Main layout component, that is getting **mounted first** to the react app.
4. **js/components/core** - Contains all the ***master/core*** components, that can be reused by the entire app. It consists of general `components` and `layout` components. ***Layout*** components specifically targets to the layout elements like sideNav or wrapper components. 

### General
1. **stories** - `stories` folder exists in all the components. It contains the `stories`  for the components that will be mounted to `storybook`. Files inside this folder has to follow specific naming convention as `ComponentName.stories.tsx`.
2. **styled** - `styled` folder exists in all the components. It contains `styled-components` from each atom/molecular component. Files inside this folder has to follow specific naming convention as `ComponentName.styled.tsx`.
3. **tests** - `tests` folder exists in all the components. It contains tests for each atom/molecular component. Files inside this folder has to follow specific naming convention as `ComponentName.test.ts`.
4. **ComponentName/containers** - Many molecular components consists of container/wrapper components wrapping around parent specific atom components. `container` folder contains all of these components for its parent.
5. **ComponentName/components** - It contains all the parent specific atom components.
 
## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

  

### `npm run storybook`

  

Runs the storybook.<br>

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

  

The page will reload if you make edits.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.