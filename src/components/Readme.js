import React from 'react';

const Readme = () => {
    return (
        <div>
            <ol>
                <li>This setup contain redux with thunk.</li>
                <li>Create all the new routes in the routes.js file.</li>
                <li>For all pages or for any  big functionality create file in the container and add all the sub child component in it.</li>
                <li>Write all the function and logic For all pages in the container files.</li>
                <li>Component file containes all the html part for each page, pass the data from container to component and show in component file.</li>
                <li>Also make all reusable file into the component.</li>
                <li>Refer this <a href="https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase" target="_blanck"><code className="badge badge-light">link</code></a> for more info and better structure.</li>
            </ol>
        </div>
    );
};

export default Readme;