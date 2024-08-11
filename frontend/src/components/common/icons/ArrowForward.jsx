import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { Wrapper } from './style';

export function ArrowForward ({fontSize, ...props}) {
    return (<Wrapper>
        <ArrowForwardIcon fontSize={fontSize} {...props} />
    </Wrapper>);
}