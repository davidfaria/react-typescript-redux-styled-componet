import styled from 'styled-components'

export const Label = styled.label``
export const Container = styled.div`
  margin: 8px 0;
  background: #fff;
  border-radius: 4px;
  padding: 1.2rem;
  border: 1px solid #ced4da;
  color: #999;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;
    &::placeholder {
      color: #999;
    }
    &:focus {
      outline: 0;
    }
  }
`
