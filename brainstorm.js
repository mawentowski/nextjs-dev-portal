import { useState, useRef, useLayoutEffect, useEffect } from 'react';

export default function Test(htmlString) {
    const [h2Count, incrementH2Count] = useState(0);
    console.log(h2Count);

    const countHeadings = () => {
        const h2Pattern = /<h2>(.*?)<\/h2>/g;
        if (htmlString.match(h2Pattern)) {
            incrementH2Count(incrementH2Count + 1);
        }
    };
    countHeadings(htmlString);

    return {};
}

// https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
// wrap DOM elements

// Generate TOC links using source HTML and regex

// const updateSectionsArrayHandler = (sectionString) => {
//     updateSectionsArray((sectionsArray) => [
//         ...sectionsArray,
//         sectionString,
//     ]);
// };

// everytime useState updated, component reloads
// useEffect
// const [sectionArray, updateSectionArray] = useState([]);

// const updateSectionArrayHandler = (elementString) => {
//     updateSectionArray((sectionArray) => [...sectionArray, elementString]);
// };

// runs after everything else in the component is rendered or rerended
// runs once when APP is loaded
// only runs again when useEffect dependencies change thereafter
// use case: remember user is logged in, dont reset when reload page.
// The dependencies are everything you use from outside useEffect
// After every app re-run, only re-run useEffect function
// ....if any of dependencies changed in the last re-render cycle.
// so in this case, if HTML string changes, then it will re-run
// HTML string changes when you click pages.
// console.log('######################################');
// console.log('The section array is');
// console.log(sectionArray);
// console.log('######################################');

{
    /* <table>
  <thead>
    <tr>
      <th colspan="2">Molestiae enim</th>
      <th colspan="2">Molestiae enim</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
    </tr>
    <tr>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
      <td>cum dolor sunt</td>
    </tr>
  </tbody>
    
  <tfoot>
    <tr>
      <th colspan= "4">November was more produstive</th>
    </tr>
  </tfoot>
</table> */
}
