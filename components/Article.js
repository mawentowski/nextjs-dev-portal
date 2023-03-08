import ArticleHeader from './ArticleHeader';
import ArticleToc from './ArticleToc';
import ArticleContent from './ArticleContent';
import ArticleFooter from './ArticleFooter';

function Article(props) {
    return (
        <main class="article" aria-label="bd-main">
            <ArticleHeader />
            <ArticleToc />
            <ArticleContent />
            <ArticleFooter />
        </main>
    );
}

export default Article;
