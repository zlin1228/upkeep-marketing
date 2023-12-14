import styled from 'styled-components'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export const FormHolder = styled.div`
    padding: 32px;
    background: #fff;
    border-radius: 4px;
`

export const H3 = styled.h3`
    font-size: 31.1px;
    Line height: 39px;
`

export const DescriptionHolder = styled.p`
    padding: 15px 0 8px 0;
`

export const FormLabel = styled(Form.Label)`
`
export const FormInput = styled(Form.Control)`
    box-shadow: 0px 4px 2px 0px rgba(22,29,37,0.05);

    :focus {
        box-shadow: 0px 4px 2px 0px rgba(22,29,37,0.05) !Important;
    }

    :hover {
        box-shadow: 0px 4px 2px 0px rgba(22,29,37,0.05) !Important;
    }
`
export const FormButton = styled(Button)`
    margin-top: 10px;
`