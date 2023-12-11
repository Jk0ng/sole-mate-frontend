import React, { useState } from 'react';
import { Popover, PopoverBody, Button, PopoverHeader } from 'reactstrap';

const Footer = () => {
    const [clicked, setClicked] = useState(false)
    
    return (
        <div>
            <Button onClick={() => setClicked(true)}
            
                id="Footer"
                type="button"
            >
                Footer 
            </Button>
            {/* {clicked ? (Do something) : (else do something else)} */}
            <Popover
                placement="left"
                target="Footer"
                toggle={function noRefCheck(){}}
            >
                <PopoverHeader>
                     Title
                </PopoverHeader>
                <PopoverBody>
                    Body
                </PopoverBody>
            </Popover>
        </div>
    )
}
export default Footer