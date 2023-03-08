import CodeBlock from './ui/codeblock';
import TabbedCodeSamples from './ui/tabbedcodesamples';

function ArticleContent(props) {
    return (
        <div class="article-content">
            <h2>Heading 1- Editor Setup</h2>
            <p>
                Paragraph - Lorem ipsum dolor, sit{' '}
                <a href="www.google.com">amet consectetur</a> adipisicing elit.
                Quod, praesentium dolorum officia{' '}
                <code className="inline-code">laborum</code> quaerat quos
                facilis aperiam ad soluta commodi modi.{' '}
                <button class>Button</button>
            </p>
            <CodeBlock />
            <TabbedCodeSamples />

            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h2>Heading 2</h2>
            <p>
                Paragraph. Here is an example of a code{' '}
                <code className="inline-code">code</code>.
            </p>
            <h3>Heading 3 - Unordered list</h3>
            <p>
                Paragraph - Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Quod, praesentium dolorum officia laborum quaerat quos
                facilis aperiam ad soluta commodi modi.
            </p>
            <ul className="bullet-list">
                <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod, praesentium dolorum officia laborum quaerat quos
                    facilis aperiam ad soluta commodi modi.
                </li>
                <li>Unordered list bullet 2</li>
                <li>Unordered list bullet 3</li>
            </ul>

            <h3>Heading 4 - Ordered List</h3>
            <p>
                Paragraph - Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Quod, praesentium dolorum officia laborum quaerat quos
                facilis aperiam ad soluta commodi modi.
            </p>
            <ol>
                <li>Ordered list bullet 1</li>
                <ul className="bullet-list">
                    <li>Bullet point</li>
                    <li>Bullet point</li>
                    <li>Bullet point</li>
                    <li>Bullet point</li>
                </ul>
                <li>Ordered list bullet 1</li>
                <li>Ordered list bullet 1</li>
            </ol>
            <h3>Heading 3 - Exaple of Unordered CHecklist </h3>
            <ul className="checklist">
                <li className="checklist-item">
                    <p>Checklist Item 1</p>
                    <p>
                        Paragraph - Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Quod, praesentium dolorum officia
                        laborum quaerat quos facilis aperiam ad soluta commodi
                        modi.
                    </p>
                    <ul className="bullet-list">
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                    </ul>
                    <ul className="bullet-list">
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                        <li>Bullet point</li>
                    </ul>
                </li>
                <li className="checklist-item">
                    <p>Checklist Item 2</p>
                </li>
                <li className="checklist-item">
                    <p>Checklist Item 3</p>
                </li>
            </ul>
            <h2>Buttons</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
                praesentium doloru
            </p>
            <h3>Normal Button</h3>
            <button>Normal Button</button>
            <h3>Plain Button</h3>

            <button className="plain">Plain Button</button>
            <h2>Tables</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
                praesentium doloru
            </p>

            <table className="main-table">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>

            <p className="caption">This is an example Caption</p>

            <h2>Asides</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
                praesentium doloru
            </p>
            <h2>Image and Caption</h2>
        </div>
    );
}

export default ArticleContent;
