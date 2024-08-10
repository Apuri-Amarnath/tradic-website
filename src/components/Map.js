import React from 'react';

import {Box, Container} from "@mui/material";

const MapComponent = () => {
    return (
        <Container>
            <Box sx={{
                borderRadius: '15px', border: 'grey 4px solid', display: 'flex', justifyContent: 'center',
                height: '30vh'
            }}>
                <iframe
                    style={{width: '100%', height: '100%', border: 'none', borderRadius: '10px'}}
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=vijayanagar%20colony&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="Google Map"
                />
                <a href="https://www.gps.ie/" style={{display: 'none'}}>gps devices</a>
            </Box>
        </Container>
    )
        ;
};

export default MapComponent;
