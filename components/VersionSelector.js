// import './VersionSelector.css';

function VersionSelector(props) {
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById('myDropdown').classList.toggle('show');
        document.getElementById('myDropdown').classList.toggle('hidden');
        document
            .getElementById('apis-drop-down-expander')
            .classList.toggle('rotated');
    }

    // Close the dropdown menu if the user clicks outside of it

    //   HAD TO HIDE THIS!!!!!
    //   window.onclick = function (event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName('dropdown-content');
    //         var apiDropdownExpander = document.getElementsByClassName(
    //             'apis-drop-down-expander'
    //         );
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //                 apiDropdownExpander.classList.remove('rotated');
    //             }
    //         }
    //     }
    //   };

    return (
        <div className="dropdown">
            <button onclick="myFunction()" className="dropbtn plain">
                <div className="selected-version">v.3.2.1</div>

                <span className="svg-container">
                    <svg
                        id="apis-drop-down-expander"
                        viewBox="0 0 70 70"
                        className=""
                    >
                        <path d="M70 35A35 35 0 1135 0a35 35 0 0135 35"></path>
                        <path d="M45.88 33.74l-.66-.66L27.3 15.1a1.78 1.78 0 00-2.52 0l-.66.66a1.78 1.78 0 000 2.52L40.78 35 24.12 51.72a1.78 1.78 0 000 2.52l.66.66a1.78 1.78 0 002.52 0L45.17 37l.66-.66a1.8 1.8 0 000-2.53z"></path>
                    </svg>
                </span>
            </button>
            <div id="myDropdown" className="dropdown-content hidden">
                <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    v3.2.1
                </a>
                <a href="www.google.com">v2.2.19</a>
                <a href="www.google.com">v1.9.6</a>
            </div>
        </div>
    );
}

export default VersionSelector;
