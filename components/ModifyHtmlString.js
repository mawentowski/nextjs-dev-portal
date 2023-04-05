export default function modifyHtmlString(htmlString) {
    console.log(
        '************************modifyHtmlString************************************'
    );
    console.log('');
    console.log('$htmlString');
    console.log(htmlString);
    console.log();

    let modifiedHtmlString = htmlString;
    modifiedHtmlString = modifiedHtmlString.replace(
        /<\/p>[\n]<h2>/g,
        '</p><hr><h2>'
    );
    console.log(
        '************************modifyHtmlString************************************'
    );
    console.log('');
    console.log('$modifiedHtmlString');
    console.log(modifiedHtmlString);
    console.log();
    return modifiedHtmlString;
}
