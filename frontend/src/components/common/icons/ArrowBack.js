import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import { Wrapper } from './style';

export function ArrowBack({fontSize, props}) {

  return (<Wrapper>
        <ArrowBackIcon fontSize={fontSize} {...props} />
    </Wrapper>);
}