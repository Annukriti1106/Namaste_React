/**const ReactHeading = React.createElement(
    'h1', 
    {id: 'heading', xyz: 'abc'},
    'Hello World From React!'
);*/

const headingFirst = React.createElement('div', {id:'parent'},
        React.createElement('div', {id:'child'},
        [React.createElement('h1', {},'I\'m an h1 tag'),
        React.createElement('h2', {},'I\'m an h2 tag')])
    )

//console.log(ReactHeading) //object
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(headingFirst);