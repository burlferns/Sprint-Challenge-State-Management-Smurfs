1. What problem does the context API help solve?
Ans:
Without context if you want to pass information from an ancestor component to a descendant component that is many levels of hierarchy below the ancestor, you had to pass this information using props through each of the components in the hierarchy between the ancestor and descendant. With context a conduit is created that allows you to pass this information from the ancestor to descendant without this information going through the intermediate components in the hierarchy. So context is a solution for too much "prop drilling"



2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Ans:
The store is the place where application state is stored. This is for state data that is needed by more than one React component in the application. In code, the store holds the state as one object. 
Actions are the messages sent to the reducers in Redux. In code they are an object, and in concept they signal the series of steps that need to be performed when a user event has occurred on the webpage. An action object contains a type name, which represents the series of steps that must be completed.  An action object can also contain data needed by the series of steps.  
Reducers are functions in Redux that receive action messages that contain a type name and may contain data. Based on the type name in the action message, the reducer executes a series of steps. These steps change the state in the Redux store. This change is done in an immutable way, by creating a new state object from the old state object and any data that is contained in the message. The old state object in the store is then replaced with the new one.
The store is the 'single source of truth' because it holds the state data that is used by more than one component in a React application, so it is the single source of information for multiple components.



3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Ans:
Application state is state data needed by more than one component in the React application. So for example an app may have a header and footer that need to display the current temperature in a location. This is state data that needs to be stored in the Redux store for example and then delivered to the header and footer.
Component state is state data that is needed by only one component. So for example a component which is a form that has an input for a user email. To implement user email input with verification a local state variable is created (using useState for example) to get proper input. This local state is component state.
Note that once component state has been used to get an email input and verify that it is a proper email input, then the email data in the component state is usually transferred to the application state (in a Redux store, for example) so that now more than one component can use this email state data.
Thus only use component state when we need it for one component and use application state when we need it for more than one component.



4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware. It sits between action creator functions and the reducer in the Redux state management system. It allows us to intercept action messages from action creators and possibly modify them before transferring them to the reducer.
The possible modifications that can be done by a thunk function are:
(a) drop the action and not send it to the reducer
(b) pass the action unchanged to the reducer
(c) modify the action and then send it to the reducer
(d) send additional actions to the reducer along with options (b) or (c) above



5. What is your favorite state management system you've learned and this sprint? Please explain why!
Ans:
I like the Redux state management system as we can store application level data all in one place and it uses Context under the hood so that we can get this data to whichever component we want without the problem of excessive prop drilling. I also like it because it supports middleware like thunk with which we can do asynchronous operations.
