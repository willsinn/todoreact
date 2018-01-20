REACT NOTES


COMPONENTS
    -two types of data that control a component: props and
    state

  props
    -single component that is used in different places of your app
    -slightly different properties in place

  state
    -initialize state in constructor and call setState when you want to change it
    -for data that is going to change


constructor()
    -must call super(); for this.props to be defined
    -right place to initialize state assign an object to this.state
    -constructor is often used to bind event handlers to class instance.

compomentWillMount
    used for the Life Cycle Method, called right before something happens

componentDidMount
    used for Life Cycle Method imported data, called after something happens


Only one div in render, multiple divs can be within one div

React needs to know something unique about every component


REACT STYLING
inline styling: up to 10 rules


FUNFUNFUNCTION

OBJECT CREATION
    -functions are like values or strings or numbers and can be added into a variable
    -when calling the function(variable) this will no longer refer to the object but will refer to the function
    -binding this to the object will force this to be bound to the object

    Object Creation
      Data/Property
      Method
      Bind Method to Objects
