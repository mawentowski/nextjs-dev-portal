import Layout from '../../../components/layout';
import PageNav from '../../../components/PageNav';
import MainBody from '../../../components/MainBody';

export default function Docs() {
    return (
        <Layout>
            <PageNav />
            <MainBody>
                <div>This is the docs page.</div>
            </MainBody>
        </Layout>
    );
}
