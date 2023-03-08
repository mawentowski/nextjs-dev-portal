import Global from '../../components/layouts/global';
import MainBody from '../MainBody';

export default function Blog({ children }) {
    return (
        <Global>
            {/* <MainBody>{children}</MainBody> */}
            {children}
        </Global>
    );
}
