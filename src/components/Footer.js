import React from 'react';
import { Input, InputGroup,InputGroupText, InputGroupTextProps, } from 'reactstrap';
const Footer = () => {
    return (
        <div>
  <InputGroup>
    <InputGroupText>
      shoe id
    </InputGroupText>
    <Input placeholder="number" />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupText>
      <Input
        addon
        aria-label="Checkbox for following text input"
        type="checkbox"
      />
    </InputGroupText>
    <Input placeholder="Sneaker Name" />
  </InputGroup>
  <br />
  <InputGroup>
    <Input placeholder="email" />
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupText>
      $
    </InputGroupText>
    <InputGroupText>
      $
    </InputGroupText>
    <Input placeholder />
    <InputGroupText>
      $
    </InputGroupText>
    <InputGroupText>
      $
    </InputGroupText>
  </InputGroup>
</div>
    )
}
export default Footer 