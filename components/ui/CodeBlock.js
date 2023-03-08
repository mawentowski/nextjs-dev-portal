function CodeBlock(props) {
    return (
        <div>
            <div class="method-example atom-one-light">
                <div class="method-example-top-bar">Response</div>
                <pre>
                    <code class="language-json">
                        token_type: Bearer,
                        <br />
                        expires_in: 3599,
                        <br />
                        ext_expires_in: 3599,
                        <br />
                        expires_on: 1635954949,
                        <br />
                        not_before: 1635951049,
                        <br />
                        resource: 51583536-28c7-4ea6-8d94-d0a7e91cb1cb,
                        <br />
                        access_token: eyJ0eXAiOiJKV1QiLsf1V6TJUs1P3601
                    </code>
                </pre>
            </div>

            <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <div class="method-example atom-one-light">
                <pre>
                    <code class="language-json">
                        token_type: Bearer,
                        <br />
                        expires_in: 3599,
                        <br />
                        ext_expires_in: 3599,
                        <br />
                        expires_on: 1635954949,
                        <br />
                        not_before: 1635951049,
                        <br />
                        resource: 51583536-28c7-4ea6-8d94-d0a7e91cb1cb,
                        <br />
                        access_token: eyJ0eXAiOiJKV1QiLsf1V6TJUs1P3601
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default CodeBlock;
