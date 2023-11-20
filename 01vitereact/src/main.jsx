import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const ReactElement ={
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    "a",         
    {href: 'https://facebook.com',target:'_blank'},
    "Click me to visit facebook"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
   <App/>
)
