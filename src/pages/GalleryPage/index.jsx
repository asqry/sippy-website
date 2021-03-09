import React, { useEffect, useState, useRef } from 'react';
import '../LandingPage/index.css';
import './index.css';
import { Flex, Spacer, Input, Box } from '@chakra-ui/react';
import * as axios from 'axios';

export function GalleryPage() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/sippy/entry').then(({ data }) => {
      if (data) {
        data.forEach((e) => {
          gallery.push({
            url: e.url,
            alt: e.alt ? e.alt : 'No alt was provided',
          });
        });
      } else gallery = null;
    });
    gallery = gallery;
    console.log(gallery);
  }, []);
  return (
    <div id="container">
      <div id="header">
        <Flex>
          <Box>
            <h1 className="header-text">sippy's builds</h1>
          </Box>
          <Spacer />
          <Box>
            <Input placeholder="search..." style={{ padding: '14px' }} />
          </Box>
        </Flex>
      </div>
      <div id="gallery"></div>
    </div>
  );
}
