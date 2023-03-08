function TabbedCodeSamples(props) {
    return (
        <div class="code-section with-tabs custom-margins">
            <div class="code-section-header">
                <div class="code-tabs">
                    <button
                        class="tablinks default-code-sample-tab"
                        onclick="openTab(event, 'bash-attach-to-a-device')"
                    >
                        curl
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'Ruby-attach-to-a-device')"
                    >
                        Ruby
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'Python-attach-to-a-device')"
                    >
                        Python
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'PHP-attach-to-a-device')"
                    >
                        PHP
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'Java-attach-to-a-device')"
                    >
                        Java
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'Node-attach-to-a-device')"
                    >
                        Node
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'Go-attach-to-a-device')"
                    >
                        Go
                    </button>
                    <button
                        class="tablinks"
                        onclick="openTab(event, 'NET-attach-to-a-device')"
                    >
                        .NET
                    </button>
                </div>
                <div class="copy-code-btn-container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM272 224h-160C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192h160C280.8 192 288 199.2 288 208S280.8 224 272 224z" />
                    </svg>
                </div>
            </div>
            <div class="copied-popup hidden">Copied!</div>

            <div id="bash-attach-to-a-device" class="tabcontent dark">
                <pre>
                    {' '}
                    <code class="language-bash">Test</code>
                </pre>
            </div>

            {/* <div id="Ruby-attach-to-a-device" class="tabcontent dark"><pre><code class="language-ruby">
                Test     
            </code>
            </pre>
            </div>

            <div id="Python-attach-to-a-device" class="tabcontent dark"><pre> <code class="language-python">
                Test
            </code>
            </pre>
            </div>

            <div id="PHP-attach-to-a-device" class="tabcontent dark"><pre> <code class="language-php">
                Test  
            </code>
            </pre>
            </div>

            <div id="Java-attach-to-a-device" class="tabcontent dark"><pre><code class="language-java">
                Test   
            </code>
            </pre>
            </div>

            <div id="Node-attach-to-a-device" class="tabcontent dark"><pre><code class="language-javascript">
                Test
            </code>
            </pre>
            </div>

            <div id="Go-attach-to-a-device" class="tabcontent dark"><pre><code class="language-go">
                Test
            </code>
            </pre>
            </div>

            <div id="NET-attach-to-a-device" class="tabcontent dark"><pre><code class="language-csharp">
                Test
            </code>
            </pre>
            </div> */}
        </div>
    );
}
export default TabbedCodeSamples;
