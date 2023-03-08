import Global from './global';
import PageNav from '../PageNav';
import MainBody from '../MainBody';

export default function Doc({ children }) {
    return (
        <Global>
            <PageNav />
            {/* <MainBody>{children}</MainBody> */}
            {children}
        </Global>
    );
}
